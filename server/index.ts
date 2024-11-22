import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import cors from 'cors';

interface ChatMessage {
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
  username: string;
}

const app = express();
app.use(cors());

const server = createServer(app);
const wss = new WebSocketServer({ server });

// Store messages in memory
const messageHistory: ChatMessage[] = [];
const MAX_MESSAGES = 100;

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send message history to new client
  const historyMessage = JSON.stringify({
    type: 'history',
    messages: messageHistory
  });
  ws.send(historyMessage);

  ws.on('message', (rawMessage) => {
    try {
      const message: ChatMessage = JSON.parse(rawMessage.toString());
      console.log('Received message:', message); // Debug log
      
      // Add message to history
      messageHistory.push(message);
      
      // Keep only the last MAX_MESSAGES messages
      if (messageHistory.length > MAX_MESSAGES) {
        messageHistory.shift();
      }

      // Broadcast to all clients including sender
      const broadcastMessage = JSON.stringify({
        type: 'message',
        message
      });

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(broadcastMessage);
        }
      });
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Error handling
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
}); 
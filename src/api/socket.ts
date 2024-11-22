import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    // Broadcast message to all clients except sender
    socket.broadcast.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

export default io;
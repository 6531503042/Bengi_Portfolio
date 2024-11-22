const wss = new WebSocket('wss://api.example.com/socket');

wss.onopen = () => {
  console.log('Connected to WebSocket server');
};

wss.onmessage = (event) => {
  console.log('Received message:', event.data);
};

wss.onclose = () => {
  console.log('Disconnected from WebSocket server');
};

wss.onerror = (error) => {
  console.error('WebSocket error:', error);
};

export default wss;
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import app from './app.js';
import { connectToDatabase } from './config/db.js';

const PORT = process.env.PORT || 5000;

async function start() {
  await connectToDatabase();
  const server = http.createServer(app);
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.CLIENT_ORIGIN || '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    socket.on('join', (roomId) => {
      socket.join(roomId);
    });
    socket.on('message', ({ roomId, message }) => {
      io.to(roomId).emit('message', message);
    });
  });

  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${PORT}`);
  });
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start server', err);
  process.exit(1);
});



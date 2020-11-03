'use strict';
const io = require('socket.io')(4000);

const caps = io.of('/caps');
caps.on('connection', (socket) => {
  console.log('Welcome to the Global connection', socket.id);
  console.log('Socket Connected!');
  socket.on('join', (room) => {
    socket.join(room);
  });
  socket.on('pickup', (payload) => {
    log('pickup', payload);
    caps.emit('pickup', payload);
  });
  socket.on('in-transit', (payload) => {
    log('in-transit', payload);
    caps.emit('in-transit', payload);
  });
  socket.on('delivered', (payload) => {
    log('delivered', payload);
    caps.to(payload.storeName).emit('delivered', payload);
  });
  socket.on('error', (payload) => {
    console.log('error', payload);
  });
});
function log(event, payload) {
  console.log('EVENT', { event, time: new Date(), payload });
}
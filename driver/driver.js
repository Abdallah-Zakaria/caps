'use strict';
const io = require('socket.io-client');
const caps = io.connect('http://localhost:4000/caps');
caps.on('connect', () => {
  console.log('Driver Connected');
  caps.on('pickup', (payload) => {
    setTimeout(function () {
      console.log(`picked up ${payload.orderId}`);
      caps.emit('in-transit', payload);
      setTimeout(function () {
        console.log(`delivered up ${payload.orderId}`);
        caps.emit('delivered', payload);
      }, 3000);
    }, 1500);
  });
});
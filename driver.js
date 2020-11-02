'use strict';

const events = require('./events');

events.on('pickup', (payload) => {
  setTimeout(myFunc1, 1000, payload);
  setTimeout(myFunc2, 4000, payload);
});

// helper function
function myFunc1(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  events.emit('in-transit', payload);
}
function myFunc2(payload){
  console.log(`DRIVER: delivered up ${payload.orderId}`);
  events.emit('delivered', payload);
}

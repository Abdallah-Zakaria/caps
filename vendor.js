'use strict';

const events = require('./events');
const faker = require('faker');
require('dotenv').config();

function intervalFunc() {
  const obj = {
    storeName: process.env.STORE_NAME || 'storeName',
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.city(),
  };
  events.emit('pickup', obj);
}
setInterval(intervalFunc, 5000);

events.on('delivered', (payload) => {
  console.log(`VENDOR : Thank you for delivering ${payload.orderId}`);
});


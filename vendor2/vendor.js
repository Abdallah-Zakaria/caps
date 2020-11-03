'use strict';
const faker = require('faker');
require('dotenv').config();
const io = require('socket.io-client');
const caps = io.connect('http://localhost:4000/caps');

const storeName = process.env.STORE_NAME || 'storeName';

caps.on('connect', () => {
  console.log('Vendor Connected');

  caps.emit('join', storeName );

  setInterval(function () {
    const payload = {
      storeName: process.env.STORE_NAME || 'storeName',
      orderId: faker.random.uuid(),
      customerName: faker.name.findName(),
      address: faker.address.city(),
    };
    caps.emit('pickup', payload);
  }, 8000);

  caps.on('delivered', (payload) => {
    console.log(`Thanks you for delivering ${payload.orderId}`);
  });
});
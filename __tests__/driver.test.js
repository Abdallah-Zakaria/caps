'use strict';
const events = require('../caps');

describe('Drivers Module',()=>{
  beforeEach(() => {
    jest.spyOn(global.console,'log');
    jest.useFakeTimers();
  });
  it('Subscribe to in-transit event',()=>{
    const payload = {orderId:'123456'};
    events.on('in-transit',(payload)=>{
      console.log(payload.orderId);
    });
    events.emit('in-transit',payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledWith(payload.orderId);
  });
  it('Subscribe to delivered event',()=>{
    const payload = {orderId:'123456'};
    events.on('delivered',(payload)=>{
      console.log(payload.orderId);});
    events.emit('pickup',payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledWith(payload.orderId);
  });
});
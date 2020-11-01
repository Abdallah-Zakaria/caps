'use strict';
const events = require('../caps');

describe('Vendor Module',()=>{
  beforeEach(() => {
    jest.spyOn(global.console,'log');
    jest.useFakeTimers();
  });
  it('Log thank you to the console',()=>{ 
    const payload = {orderId:'123456'};
    events.emit('delivered',payload);
    expect(console.log).toHaveBeenCalledWith(`VENDOR : Thank you for delivering ${payload.orderId}`);
  });
  it('Subscribe to pickup event',()=>{
    const payload = {orderId:'123456'};
    events.on('pickup',payload=>{
      console.log(payload.orderId);
    });
    events.emit('pickup',payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledWith(payload.orderId);
  });
});
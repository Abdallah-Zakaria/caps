'use strict';
const events = require('../caps');
jest.spyOn(global.console,'log');

describe('Main Hub Application Caps',()=>{
  it('log on subscribe to pickup event',()=>{
    events.emit('pickup','test');
    expect(console.log).toHaveBeenCalled();
  });
  it('log on subscribe to in-transit event',()=>{
    events.emit('in-transit','test');
    expect(console.log).toHaveBeenCalled();
  });
  it('log on subscribe to delivered event',()=>{
    events.emit('delivered','test');
    expect(console.log).toHaveBeenCalled();
  });
});
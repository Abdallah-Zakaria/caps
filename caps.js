'use strict';


const events =require('./events');

function log(event, payload) {
  console.log({ event, time: new Date(), payload });
}

events.on('pickup',(payload)=>{
  log('pickup' ,payload )
})
events.on('in-transit',(payload)=>{
  log('in-transit' ,payload )
})

require('./driver');
require('./vendor');

events.on('delivered',(payload)=>{
  log('delivered' ,payload )
})

module.exports = events;

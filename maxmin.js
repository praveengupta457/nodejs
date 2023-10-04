const eventEmitter = require('events')
var event1 = new eventEmitter();
var event2 = new eventEmitter();

// default max listener is 10
console.log("default max listeners")
console.log("default max listner", event1.getMaxListeners());
console.log("default max listner", event2.getMaxListeners());

// making default listeners to 2;
eventEmitter.defaultMaxListeners=2;
console.log("default listeners to 2") 
console.log("defaut max listner", event1.getMaxListeners());
console.log("default max listner", event2.getMaxListeners());

// setting event1 as 5 
event1.setMaxListeners(5);
console.log( "setting event1 as 5" );
console.log("defaut max listner of function 1 is ", event1.getMaxListeners());
console.log("default max listner", event2.getMaxListeners());
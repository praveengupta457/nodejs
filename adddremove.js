const eventEmitter = require('events')

const event = new eventEmitter();

var myfun1 = (msg) =>{
    console.log('msg from function 1',msg)
}
var myfun2 = (msg)=>{
    console.log('msg from function 2 ',msg)
}

event.on('myEvent',myfun1);
// event.on('myEvent',myfun1);
event.on('myEvent',myfun2);
event.removeListener('myEvent',myfun1)
// event.removeListener('myEvent',myfun2)
// event.removeAllListeners('myEvent')

event.emit('myEvent',"event occured");
// event.emit('myEvent',"event occured");
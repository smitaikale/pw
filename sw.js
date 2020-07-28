//self.addEventListener('push',()=>{

//self.ServiceWorkerRegistration.sendNotification('test message',{});

//})

self.addEventListener('push',function (e){

var options={
body: 'this notification was generated from a push',
icon:'images/example.png',
vibrate:[100,50,100],
data:{
    dateOfArrival:Date.now,
    primaryKey:'2'

},
actions:[
    {action:'explore',title:'explore this new world',icon:'images/checkmark.png'},
    {action:'close',title:'close',icon:'images/xmark.png'},
]
};
e.waitUnti(
    self.ServiceWorkerRegistration.showNotification('hello world',options)
);
});
self.addEventListener('push',function (e){

var options = {
body: 'you have one notification',
icon: 'images/example.png',
vibrate: [100,50,100],
data: {
    dateOfArrival: Date.now(),
    primaryKey:'2'

},
actions:[
    {action:'explore',title:'explore',icon:'images/checkmark.png'},
   // {action:'close',title:'Close',icon:'images/xmark.png'},
    
]
};
e.waitUntil(
    self.registration.showNotification('First  Notification',options)
);
});
function AddMessage() {
    alert('test');
}

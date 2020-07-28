var push=require('web-push')
let vapidkeys={
    publicKey: 'BBxYcX5EVrEypniCr6VBTC63WQ385spbUUQbygFTUyrF8QEyACdDBb11Wzwv7H1j799F53YIkD1xhcn1NLV6QJc',
    privateKey: 'saADRtj2bQuRjc5wdl6J_3HWDpld_IFqWq7l4b8aScU'
  }

  push.setVapidDetails('smitaikale86@gmail.com',vapidkeys.publicKey,vapidkeys.privateKey);


  let sub={};
  push.sendNotification(sub,'test notification');
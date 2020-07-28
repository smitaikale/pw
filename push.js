var push= require('web-push')
let vapidKeys={
    publicKey: 'BBxYcX5EVrEypniCr6VBTC63WQ385spbUUQbygFTUyrF8QEyACdDBb11Wzwv7H1j799F53YIkD1xhcn1NLV6QJc',
    privateKey: 'saADRtj2bQuRjc5wdl6J_3HWDpld_IFqWq7l4b8aScU'
  }

  push.setVapidDetails('mailto:smita.ikale@ness.com',vapidKeys.publicKey,vapidKeys.privateKey);


  let sub=
  {
    endpoint:"https://fcm.googleapis.com/fcm/send/dCcGCyK2-0o:APA91bEBUCPA72lhbs0O1Tfsy-pld0gA2cN3nJIROe1RU45U0HHLCorztAbf0V_J5aPd1GNGlMiV8dLB1Uv8Ak_YTtCG6mvZ_WrPFx6ZbhZRjpS2GcD2iNX0rFlwYwHJwTVYZJioEJ0y",
    expirationTime:null,
    keys:
    {
    p256dh:"BGaZL21R6X6qpnjDB-dUZ3AQEp5IvwHZL3AWOUxOqZuNHZ8ZT1EactzQ4aZ-ctUMttzaixn9PCWi-TXLi5GbXLM",
    auth:"XXYlJ9cIhMbE0MFtfH29eg"
  }
}
  //{
    //endpoint:"https://fcm.googleapis.com/fcm/send/dCcGCyK2-0o:APA91bEBUCPA72lhbs0O1Tfsy-pld0gA2cN3nJIROe1RU45U0HHLCorztAbf0V_J5aPd1GNGlMiV8dLB1Uv8Ak_YTtCG6mvZ_WrPFx6ZbhZRjpS2GcD2iNX0rFlwYwHJwTVYZJioEJ0y",
    //expirationTime:null,
    //keys:{
      //p256dh:"BGaZL21R6X6qpnjDB-dUZ3AQEp5IvwHZL3AWOUxOqZuNHZ8ZT1EactzQ4aZ-ctUMttzaixn9PCWi-TXLi5GbXLM",
      //auth:"XXYlJ9cIhMbE0MFtfH29eg"
    //}
  //}
  push.sendNotification(sub,'test notification');
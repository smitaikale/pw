var push= require('web-push');

let vapidKeys={
    publicKey: 'BBxYcX5EVrEypniCr6VBTC63WQ385spbUUQbygFTUyrF8QEyACdDBb11Wzwv7H1j799F53YIkD1xhcn1NLV6QJc',
    privateKey: 'saADRtj2bQuRjc5wdl6J_3HWDpld_IFqWq7l4b8aScU'
  };

  push.setVapidDetails(
    'mailto:smita.ikale@ness.com'
    ,vapidKeys.publicKey
    ,vapidKeys.privateKey
    );


  let sub=
  {
    endpoint:'https://db5p.notify.windows.com/w/?token=BQYAAAC8WNTe2wo4SX1wwbgGDQJKQ8feOi5QiCAvFkRSR4cGaxxWQmwthLz7mAy8fLPVKwXJIITDcxZ5XtW0O8Be71BWsAf%2fbTODtfmlqYfNGwnbAKZFA%2fFlt9f%2bXaF%2b8zBdK5CdCd32Z7KaYigAsHhXRt1olFEyHGjE6cuUMhRFUSUdGUu%2f2YFlcfdMkxjbYvzMMVATOKBpYnRt7QTExv1vdM7K%2f9diK6b6q7qzWx2yoQsazXTeqYTctGNRfyyQpEfofQVr3z7K%2fW2CNGfQ2rAPhiu9jDyJuKuWjhtLp9sTGtPZhnKrYF7vH8xBg0Ok3ZhC2CauPDqlsLzBTv5MsZMpDfmP',
    expirationTime:300,
    keys:
    {
    p256dh:'BHdX4JhtBeTyhkNgStAaBiVbO_YEL6kpRiQ2EIL6v_w7NxVSvyAe3Fw0ATCQbegIIWDZVDiVVi4RPGNlCxTeLyE',
    auth:'skdxcZ6f3gO6ZIE4fAxDSg'
  }
};
  
  push.sendNotification(sub,'test message');
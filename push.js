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
    
    let  functiontest= new Function();
    functiontest=SendNotificationMessage;
    functiontest();
 function SendNotificationMessage ()
 {
  push.sendNotification({"endpoint":"https://db5p.notify.windows.com/w/?token=BQYAAAC8WNTe2wo4SX1wwbgGDQJKQ8feOi5QiCAvFkRSR4cGaxxWQmwthLz7mAy8fLPVKwXJIITDcxZ5XtW0O8Be71BWsAf%2fbTODtfmlqYfNGwnbAKZFA%2fFlt9f%2bXaF%2b8zBdK5CdCd32Z7KaYigAsHhXRt1olFEyHGjE6cuUMhRFUSUdGUu%2f2YFlcfdMkxjbYvzMMVATOKBpYnRt7QTExv1vdM7K%2f9diK6b6q7qzWx2yoQsazXTeqYTctGNRfyyQpEfofQVr3z7K%2fW2CNGfQ2rAPhiu9jDyJuKuWjhtLp9sTGtPZhnKrYF7vH8xBg0Ok3ZhC2CauPDqlsLzBTv5MsZMpDfmP","expirationTime":null,"keys":{"p256dh":"BHdX4JhtBeTyhkNgStAaBiVbO_YEL6kpRiQ2EIL6v_w7NxVSvyAe3Fw0ATCQbegIIWDZVDiVVi4RPGNlCxTeLyE","auth":"skdxcZ6f3gO6ZIE4fAxDSg"}},'sampletesting');
 }
   
 
  let sub=
  {
    endpoint:'https://db5p.notify.windows.com/w/?token=BQYAAAC8WNTe2wo4SX1wwbgGDQJKQ8feOi5QiCAvFkRSR4cGaxxWQmwthLz7mAy8fLPVKwXJIITDcxZ5XtW0O8Be71BWsAf%2fbTODtfmlqYfNGwnbAKZFA%2fFlt9f%2bXaF%2b8zBdK5CdCd32Z7KaYigAsHhXRt1olFEyHGjE6cuUMhRFUSUdGUu%2f2YFlcfdMkxjbYvzMMVATOKBpYnRt7QTExv1vdM7K%2f9diK6b6q7qzWx2yoQsazXTeqYTctGNRfyyQpEfofQVr3z7K%2fW2CNGfQ2rAPhiu9jDyJuKuWjhtLp9sTGtPZhnKrYF7vH8xBg0Ok3ZhC2CauPDqlsLzBTv5MsZMpDfmP',
    expirationTime:6000,
    keys:
    {
    p256dh:'BHdX4JhtBeTyhkNgStAaBiVbO_YEL6kpRiQ2EIL6v_w7NxVSvyAe3Fw0ATCQbegIIWDZVDiVVi4RPGNlCxTeLyE',
   auth:'skdxcZ6f3gO6ZIE4fAxDSg'
  }
};
push.sendNotification(sub,'testing');
let subb=
{
  endpoint:'https://sg2p.notify.windows.com/w/?token=BQYAAACihT5r8HF3d9cTZFGIyxIhkd5reo7baDmPlpTKRG%2fNdXh1iRb8GWHEJxUynorZZjgnkgp66J9QFhStkikVkNay5Wx46GCxvLIJBpm%2b7VydXi7IWLGeR%2bJGNVuIqjygXq4tHTOU7mJOFv%2f0kQSlv36hh8uAquxlNT00scztYQJIdYCeyhmGGQAcldHRZfe2Xk3Qb1%2fhV8DDuazRVpX%2bT6AxYMMoQv4MKegJyVPVxFh6O49BDce4JlBogph24ErktvJwuNf1ZLJ0vJ3o%2fTNVEFT4rmMfYafdua5QU9Oe7eF8izkLsD3J%2fA2qa5N%2bKgFIC%2fbMO7ecvVM%2fHU1v%2bW0HLY9dtPPvojyyd8lkOzu9cuKOMA%3d%3d',
  expirationTime:6000,
  keys:
  {
  p256dh:'BDkx-MuhgxsYlb2DvNvdPOGDrccIDHvzh0zEmtOAJCLx9pgd2apH6cL-snsMjNffcwZQ9G3DwqCkREFEvFbazcM',
  auth:'aLGOvTvUKfYUQmaaZA_F5g'
}
};
  push.sendNotification(subb,'test message');
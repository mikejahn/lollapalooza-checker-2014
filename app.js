var jsdom = require("jsdom");
var client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');

var sendTextMessage = function() {
    client.sendMessage({
        to:'+1551231234','7736476891'
        from: '+1551231234', 
        body: 'Tickets on sale!!!' 
    }, function(err, responseData) { 
        console.log("text message sent..tickets on sale!");
        console.log("Killing the app...");
        process.exit(1);
    });
};

var performTest = function() {
jsdom.env(
  "http://www.lollapalooza.com/",
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {
    console.log("Entering lolla.com...");
    if(window.$(".commerce-item--onsale").length > 0)
    {
      sendTextMessage();
      console.log("Tickets on sale!");
    } else {
      console.log("Nothing to see here...");
    }
  }
);

jsdom.env(
  "http://www.lollapalooza.com/tickets",
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {
    console.log("Entering lolla.com/tickets...");
    if(window.$(".ticket.ticket--onsale").length > 0)
    {
      sendTextMessage();
      console.log("Tickets on sale!");
    } else {
      console.log("Nothing to see here...");
    }
  }
);

};

//set interval to perform the check
setInterval(function(){
  performTest();
}, 60 * 60, 1000);


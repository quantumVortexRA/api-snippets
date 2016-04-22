// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC32a3c49700934481addd5ce1659f04d2';
var authToken = "{{ auth_token }}";
var client = require('twilio')(accountSid, authToken);

client.sip.ipAccessControlLists("AL32a3c49700934481addd5ce1659f04d2").update({
    friendlyName: "Avons Lieutenants"
}, function(err, ipAccessControlList) {
    console.log(ipAccessControlList.friendlyName);
});
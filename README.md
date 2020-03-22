# OAuth2 Callback Handler
OAuth2 Callback Handler is a simple react app for handling callbacks during an OAuth 2.0 Authentication proccess.

## Installation
```sh
git clone https://github.com/arthursoas/oAuth2-callback-handler.git

cd oAuth2-callback-handler
npm install
npm start
```

## Usage
Set the authentication the third party service callback URL as `https://oAuth2-callback-handler-host/callback`.
The OAuth2 Callback Handler will receive the authentication data and post a message to your app with all the parameters sent on URL by the third party sevice you are authenticating.

See the following example:

The service sends the parameters `code` and `usercorrelator` during the authentication proccess.
`https://authhandler.myapp.com/callback?code=ffGRret54rFEtgregvfD&usercorrelator=66a617ad-8a8d`

OAuth2 Callback Handler will notify you app with the following message.
```javascript
{
  code: "ffGRret54rFEtgregvfD",
  usercorrelator: "66a617ad-8a8d"
}
```

To get that message, you can use the [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method on the page what opened the third party service popup.

```javascript
function HandleMessages(message) {
  window.removeEventListener('message', HandleMessages)
  // Do stuff
}

window.open(
  "https://auth.thirdipartyiservice.com?client_id=rgRREvgre4&redirect_url=https://oAuth2-callback-handler-host/callback",
  'OAuth Example',
  'height=600,width=500');

// Add a message listener to handle popup messages
window.addEventListener('message', HandleMessages);
```

Some frameworks can use messages too, so be sure the message received contains the data you are expecting from the 
OAuth2 Callback Handler

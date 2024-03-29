# OAuth2 Callback Handler 🤝
OAuth2 Callback Handler is a simple react app for handling callbacks during an OAuth 2.0 Authentication proccess.

## Installation
```sh
git clone https://github.com/arthursoas/oAuth2-callback-handler.git

cd oAuth2-callback-handler
npm install
npm start
```

## Usage
Set the third party service authentication callback URL as `https://oAuth2-callback-handler-host/callback`.
The OAuth2 Callback Handler will receive the authentication data and post a message to your app with all the parameters sent on URL by the third party sevice you are authenticating.

See the following example:

The service sends the parameters `code` and `user_correlator` during the authentication proccess.
The callback URL would looks like the following:

`https://auth-handler.myapp.com/callback?code=0000000000000&user_correlator=5555555555555`

OAuth2 Callback Handler will notify your app with the following message.
```javascript
{
  code: "0000000000000",
  user_correlator: "5555555555555"
}
```

To handle that message, you can use the [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method on the page what opened the third party service popup.

Example:
```javascript
function HandleMessages(message) {
  // Remove message listener after message was received
  window.removeEventListener('message', HandleMessages)
  
  // Do stuff
  // ...
}

window.open(
  "https://auth.third-party-service.com?client_id=99999999&redirect_url=https://oAuth2-callback-handler-host/callback",
  'OAuth Example',
  'height=600,width=500');

// Add a message listener to handle popup messages
window.addEventListener('message', HandleMessages);
```

Some frameworks can use messages too, so be sure the message received contains the data you are expecting from the 
OAuth2 Callback Handler

## Customization
If you need customize the OAuth2 Callback Handler behavior, create a new module what consumes the CallbackService.

But have in mind that the good pratice is to maintain all your business rules on your application script, and not on the popup. It should be only an intermediary to receive the third party service authentication data and pass it to your application.

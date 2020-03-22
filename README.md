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
To use the default handler, set the authentication callback URL as `https://oAuth2-callback-handler-host/callback`.
The OAuth2 Callback Handler will post a message to the popup opener with all the parameters sent on URL by the third party sevice you are authenticating.

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

# Loglog Loggly

> [Loggly](https://loggly.com) transport for [Loglog](https://github.com/goodybag/loglog)

__Install:__

```
npm install -S loglog-loggly
```

__Usage:__

```javascript
var loglog = require('logllog');

// Log to console and loggly
var logger = logger.create( 'App', {
  transports: [
    loglog.transports.console()
    // Same options as node loggly
  , require('loglog-loggly')({
      token: "your-really-long-input-token"
    , subdomain: "your-subdomain"
      // Ort use auth
    , auth: {
        username: "your-username"
      , password: "your-password"
      }
    })
  ]
});
```
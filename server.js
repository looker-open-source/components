'use strict';

require('dotenv').config()

const GoogleAuth = require('google-auth-library');
const googleAuth = new GoogleAuth;
const googleClient = new googleAuth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);

const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const session = require('express-session');

app.use(express.static(__dirname + '/dist'));

if (process.env.NODE_ENV === 'production') {
  app.use(session({
    secret: process.env.CLIENT_SECRET,
    cookie: { maxAge: 900000 }, // 15 minutes
    resave: true,
    saveUninitialized: true
  }));
}

let auth = function(req, res, next) {
  if (req.session.userId) {
    return next();
  } else {
    return res.sendStatus(401);
  }
};

app.post('/api/google/auth', (req, res) => {
  let token = req.body.idtoken;
  googleClient.verifyIdToken(
    token,
    process.env.CLIENT_ID,
    function(err, login) {
      if (err) {
        res.status(500).send(err);
      } else {
        let payload = login.getPayload();
        let domain = payload.hd;
        if (domain === 'looker.com') {
          let userId = payload.sub;
          let userName = payload.given_name;

          req.session.userId = userId;
          req.session.userName = userName;
          res.send({
            user: {
              id: userId,
              name: userName
            }
          });
        } else {
          req.session.destroy();
          res.status(403).send('You are not allowed to view this content without a looker.com email.');
        }
      }
    }
  );
});

app.get('/api/config', (req, res) => {
  let isDev;
  if (process.env.NODE_ENV === 'production') {
    isDev = false;
  } else {
    isDev = true;
  }

  res.send({
    isLocalDevelopmentEnvironment: isDev
  });
});

app.get('/api/auth', auth, (req, res) => {
  res.send({
    user: {
      id: req.session.userId,
      name: req.session.userName
    }
  });
});

// To provide a health or version check endpoint you should place a status.json file
// into the project root, which will get served by this endpoint (or 404 otherwise).
app.get('/status', (req, res) => {
  res.sendFile('status.json', { root: __dirname });
})

app.use(function(req, res) {
  res.sendFile('index.html', { root: __dirname + '/dist' });
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});

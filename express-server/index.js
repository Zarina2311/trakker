const express = require("express");
const bodyParser = require("body-parser");
const TrakkerDatabase = require("./trakker-database");
const { auth } = require("express-openid-connect");
const { requiresAuth } = require("express-openid-connect");
const dotenv = require("dotenv").config();

//added custom code for auth
const config = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: process.env.APP_SESSION,
  },
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;
const db = TrakkerDatabase();
const api = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
api.use(auth(config));

// req.isAuthenticated is provided from the auth router
api.get("/", (req, res) => {
  res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});

//requiresAuth middleware for routes that require authentication
api.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.openid.user));
});

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
api.use(bodyParser.urlencoded({ extended: false }));

// to get all columns
api.get("/user/:user_id", (req, res) =>
  db
    .getColumns({
      user_id: req.params.user_id,
    })
    .then((columns) => res.send(columns))
    .catch((err) => {
      // TODO figure out which status to send based on the err object
      console.log("there was an error: \n\n", err);
      res.send([]);
    })
);

// to create a new column
api.post("/user/:user_id", (req, res) => {
  db.addColumn({
    user_id: req.params.user_id,
    name: req.body.name,
  })
    .then((column) => res.send(column))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    });
});

// to get all cards for a column
api.get("/user/:user_id/:col_id", (req, res) =>
  db
    .getCardsForColumn({
      col_id: req.params.col_id,
    })
    .then((cardList) => res.send(cardList))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    })
);

// to create a card for a column
api.post("/user/:user_id/:col_id", (req, res) => {
  db.addCardToColumn({
    col_id: req.params.col_id,
    name: req.body.name,
  })
    .then((card) => res.send(card))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    });
});

api.listen(PORT, () => {
  console.log(`trakker express api listening on port ${PORT}`);
});
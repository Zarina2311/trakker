const express = require("express");
const bodyParser = require("body-parser");
const TrakkerDatabase = require("./trakker-database");
const morgan = require("morgan");

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;
const db = TrakkerDatabase();
const api = express();

api.use(morgan("tiny"));
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
api.use(bodyParser.urlencoded({ extended: false }));

// to get all columns
api.get("/user/:auth0_id", (req, res) =>
  db
    .getColumns({ auth0_id: req.params.auth0_id })
    .then((columns) => res.send(columns))
    .catch((err) => {
      // TODO figure out which status to send based on the err object
      console.log("there was an error: \n\n", err);
      res.send([]);
    })
);

// to create a new column
api.post("/user/:auth0_id", (req, res) => {
  console.log("body: ", req.body);
  return db
    .addColumn({
      auth0_id: req.params.auth0_id,
      name: req.body.name,
    })
    .then((column) => res.send(column))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    });
});

// to get all cards for a column
api.get("/user/:auth0_id/:col_id", (req, res) =>
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
api.post("/user/:auth0_id/:col_id", (req, res) => {
  return db
    .addCardToColumn({
      col_id: req.params.col_id,
      name: req.body.name,
    })
    .then((card) => res.send(card))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    });
});

// to move a card
api.put("/user/:auth0_id/:col_id/:card_id", (req, res) => {
  return db
    .moveCard({
      card_id: req.params.card_id,
      new_col_id: req.body.new_col_id,
    })
    .then((card) => res.send(card))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    });
});

// to delete a column
api.delete("/user/:auth0_id/:col_id", (req, res) =>
  db
    .deleteColumn({
      col_id: req.params.col_id,
    })
    .then((ok) => res.send(ok))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    })
);

// to delete a card
api.delete("/user/:auth0_id/:col_id/:card_id", (req, res) =>
  db
    .deleteCard({
      card_id: req.params.card_id,
    })
    .then((ok) => res.send(ok))
    .catch((err) => {
      console.log("there was an error: \n\n", err);
      res.send([]);
    })
);

api.listen(PORT, () => {
  console.log(`trakker express api listening on port ${PORT}`);
});

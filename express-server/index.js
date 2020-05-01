const express = require("express");
// const morgan = require("morgan");
const bodyParser = require("body-parser");
const TrakkerDatabase = require("./trakker-database");

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;
const db = new TrakkerDatabase();

const api = express();

// Middlewares
// api.use(morgan("tiny"));
api.use(bodyParser.json());

// GET board
api.get("/board", (req, res) =>
  db.getAllBoards().then((boards) => res.send(boards))
);

// POST cards
api.post("/cards", (req, res) => {
  db.addCard(req.body)
    .then((card) => res.send(card))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// GET cards
api.get("/cards", (req, res) => db.getCards().then((cards) => res.send(cards)));

// sanityCheck will make sure the DB is working before listening
db.sanityCheck().then(() => {
  api.listen(PORT, () => {
    console.log(`

      trakker express api listening on port ${PORT}

    `);
  });
});

const pgp = require("pg-promise")();

const ignoreEmptyResultsError = (err) => {
  if (err.code !== 0) {
    throw new Error(err);
  } else {
    return [];
  }
};

module.exports = () => {
  const connectionString =
    process.env.DATABASE_URL || "postgres://localhost:5432/trakker";
  const db = pgp({ connectionString });

  console.log("Postgres DB => ", connectionString);
  db.one("SELECT true AS success")
    .then((res) => `Test query succeeded: ${res.success}`)
    .then(console.log);

  const getColumns = ({ auth0_id }) =>
    db
      .many(
        `
      SELECT
        id,
        name
      FROM col
      WHERE col.auth0_id = $1
    `,
        [auth0_id]
      )
      .catch(ignoreEmptyResultsError);

  const addColumn = ({ auth0_id, name }) =>
    db
      .many(
        `
      INSERT INTO col(auth0_id, name) 
      VALUES ($1, $2)
      RETURNING *
    `,
        [auth0_id, name]
      )
      .catch(ignoreEmptyResultsError);

  const getCardsForColumn = ({ col_id }) =>
    db
      .many(
        `
      SELECT
        id,
        col_id,
        name
      FROM card
      WHERE card.col_id = $1
    `,
        [col_id]
      )
      .catch(ignoreEmptyResultsError);

  const addCardToColumn = ({ col_id, name }) =>
    db
      .many(
        `
      INSERT INTO card(col_id, name) 
      VALUES ($1, $2)
      RETURNING *
    `,
        [col_id, name]
      )
      .catch(ignoreEmptyResultsError);

  return {
    getColumns,
    addColumn,
    addCardToColumn,
    getCardsForColumn,
  };
};

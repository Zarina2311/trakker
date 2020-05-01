const pgp = require("pg-promise")();
const dbName = process.env.DB_NAME || "trakker";

class TrakkerDatabase {
  constructor() {
    const connectionString = `postgres://localhost:5432/${dbName}`;
    console.log("Postgres DB => ", connectionString);
    this.db = pgp(connectionString);
  }

  sanityCheck() {
    console.log("\tTesting database connection...");
    return this.db
      .one("SELECT true AS query_succeeded")
      .then((res) => `\tCan run db queries: ${res.query_succeeded}`)
      .then(console.log);
  }
}

module.exports = TrakkerDatabase;

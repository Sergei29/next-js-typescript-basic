import Database from "easy-json-database";

const db = new Database("./db/db.json", {
  snapshots: {
    enabled: true,
    interval: 24 * 60 * 60 * 1000,
  },
});

export default db;
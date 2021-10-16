import Database from "easy-json-database";

const db = new Database("./db/db.json", {
  snapshots: {
    enabled: true,
    interval: 24 * 60 * 60 * 1000,
  },
});

export default db;

export const mockData = [
  {
      "id": 1634233912404,
      "title": "Note 0"
  },
  {
      "id": 1634233912405,
      "title": "Note 1"
  },
  {
      "id": 1634233912406,
      "title": "Note 2"
  },
  {
      "id": 1634233912407,
      "title": "Note 3"
  },
  {
      "id": 1634233912408,
      "title": "Note 4"
  },
  {
      "id": 1634233912409,
      "title": "Note 5"
  },
  {
      "id": 1634233912410,
      "title": "Note 6"
  },
  {
      "id": 1634233912411,
      "title": "Note 7"
  },
  {
      "id": 1634233912412,
      "title": "Note 8"
  },
  {
      "id": 1634233912413,
      "title": "Note 9"
  },
  {
      "id": 1634233912414,
      "title": "Note 10"
  },
  {
      "id": 1634233912415,
      "title": "Note 11"
  },
  {
      "id": 1634233912416,
      "title": "Note 12"
  },
  {
      "id": 1634233912418,
      "title": "New Title Note 14"
  },
  {
      "title": "New Title Note 15",
      "id": 1634234421799
  }
]
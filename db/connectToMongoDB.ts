import { MongoClient, MongoClientOptions, Db } from "mongodb";
import { MONGO_URI, DB_NAME } from "../constants";

// check the MongoDB URI
if (!MONGO_URI) {
  throw new Error("Define the MONGO_URI environmental variable");
}

// check the MongoDB DB
if (!DB_NAME) {
  throw new Error("Define the DB_NAME environmental variable");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export const connectToMongoDB = async () => {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }
  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Connect to cluster
  let client = new MongoClient(MONGO_URI!, opts as MongoClientOptions);
  await client.connect();
  let db = client.db(DB_NAME);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
};

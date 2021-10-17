export const API_INDEX_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";
export const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;
export const ENVIRONMENT = process.env.NEXT_PUBLIC_VERCEL_ENV;
export const HELP_APP_URL = process.env.NEXT_PUBLIC_HELP_APP_URL;
export const DB_NAME = process.env.NEXT_PUBLIC_DB_NAME;

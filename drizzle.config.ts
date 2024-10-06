import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  driver: "pglite",
  dbCredentials: {
    url: process.env.DB_URL as string
  },
  verbose: true,
  strict: true
});
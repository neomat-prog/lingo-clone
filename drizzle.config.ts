import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // Dialect is correctly set to PostgreSQL
  // driver: "pg", // Use 'pg' for Neon (node-postgres driver)
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // ssl: true // Use the Neon connection string
  },
} satisfies Config;

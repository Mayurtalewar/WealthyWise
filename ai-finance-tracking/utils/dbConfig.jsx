import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  //"postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require"
  //"postgresql://mayur:adminmayur7517@database.cj6a82wqqc4b.ap-south-1.rds.amazonaws.com:5432/wealthy_wise"
   process.env.NEXT_PUBLIC_DATABASE_URL
);
export const db = drizzle(sql, { schema });





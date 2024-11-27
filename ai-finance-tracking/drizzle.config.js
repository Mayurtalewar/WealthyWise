export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    //url: "postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require",
    //url: "postgresql://mayur:adminmayur7517@database.cj6a82wqqc4b.ap-south-1.rds.amazonaws.com:5432/wealthy_wise",
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
     // "postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require",
    //  "postgresql://mayur:adminmayur7517@database.cj6a82wqqc4b.ap-south-1.rds.amazonaws.com:5432/wealthy_wise",
  },
};
//DATABASE_URL="postgresql://mayur:adminmayur7517@database.cj6a82wqqc4b.ap-south-1.rds.amazonaws.com:5432/wealthy_wise"


  
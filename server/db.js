import { Pool } from "pg";

const pool = new Pool({
  user: "changteezy",
  host: "localhost",
  database: "real_estate_db",
  password: "changteezy",
  port: 5432,
});

export { pool };

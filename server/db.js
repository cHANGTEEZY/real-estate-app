import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "real_estate_db",
  password: "changteezy",
  port: 5432,
});

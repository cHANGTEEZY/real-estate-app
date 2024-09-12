import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "real_estate_db",
  password: "changteezy",
  port: 5432,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Connected to the database");
    client.release();
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
}

testConnection();

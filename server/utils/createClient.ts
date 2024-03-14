import pkg from "pg";
const { Client } = pkg;

const config = useRuntimeConfig();

export default async function (): Promise {
  let client = null;

  try {
    const { PG_USER, PG_HOST, PG_DB, PG_PASS, PG_PORT } = config;

    client = new Client({
      user: PG_USER,
      host: PG_HOST,
      database: PG_DB,
      password: PG_PASS,
      port: PG_PORT,
    });

    await client.connect();
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }

  return client;
}

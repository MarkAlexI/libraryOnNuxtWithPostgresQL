import pkg from "pg";
const { Client } = pkg;

const config = useRuntimeConfig();

export default async function (): Promise {
  let client = null;

  try {
    const { pg_user, pg_host, pg_db, pg_pass, pg_port } = config;

    client = new Client({
      user: pg_user,
      host: pg_host,
      database: pg_db,
      password: pg_pass,
      port: pg_port,
    });

    await client.connect();
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }

  return client;
}

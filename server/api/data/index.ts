import pkg from "pg";
const { Client } = pkg;

const config = useRuntimeConfig();

const createClient = async () => {
  let client = null;

  try {
    client = new Client({
      user: config.pg_user,
      host: config.pg_host,
      database: config.pg_db,
      password: config.pg_pass,
      port: config.pg_port,
    });

    await client.connect();
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }

  return client;
};

export default defineEventHandler(async () => {
  const startTime = Date.now();
  const db = await createClient();

  try {
    const { rows: users } = await db.query("SELECT * FROM users");
    const duration = Date.now() - startTime;

    return {
      users,
      duration,
    };
  } catch (error) {
    console.log(error.message, "query error");
  } finally {
    await db.end();
    console.log("End of connection.");
  }
});

import pkg from 'pg';
const { Client } = pkg;

export default defineNitroPlugin(() => {
  const client = new Client({
    user: 'MarkAlexI',
    host: 'localhost',
    database: 'mydb',
    password: 'fullStack2024',
    port: 5432, // Default PostgreSQL port
  });

  client.connect();

  return {
//    provide: {
      db: client
//    }
  };
});


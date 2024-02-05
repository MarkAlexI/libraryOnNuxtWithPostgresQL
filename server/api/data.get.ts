export default defineEventHandler((event) => {
  const $db = db.client;
  async function getUsers() {
    const result = await db.query('SELECT * FROM users');
    return result?.rows;
  };

  const data = getUsers();

  return {
    payload: data
  };
});

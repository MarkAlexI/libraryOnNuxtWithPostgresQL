export default defineEventHandler(async () => {
  const startTime = Date.now();
  const db = await createClient();

  try {
    const duration = Date.now() - startTime;
    const { title, author, year } = bookData;
    const query = `
      INSERT INTO books (title, author, year, user_id)
      VALUES ($1, $2, $3, (SELECT id FROM users WHERE username = 'guest'))
    `;
    const result = await db.query(query, [title, author, year]);
    console.log("The book was successfully saved.");

    return {
      result,
      duration,
    };
  } catch (error) {
    console.log(error.message, "query error");
  } finally {
    await db.end();
    console.log("End of connection.");
  }
});

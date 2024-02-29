export default defineEventHandler(async (event) => {
  const startTime = Date.now();
  const db = await createClient();

  try {
    const duration = Date.now() - startTime;
    const { title, author, year, genre } = await readBody(event);
    const query = `
      INSERT INTO books (title, author, published_year, type_of_book, user_id)
      VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE username = 'guest'))
    `;
    const result = await db.query(query, [title, author, year, genre]);
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

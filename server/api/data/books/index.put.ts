export default defineEventHandler(async (event) => {
  const startTime = Date.now();
  const db = await createClient();

  try {
    const duration = Date.now() - startTime;
    const { id, title, author, year, genre } = await readBody(event);
    const query = `
      UPDATE books 
      SET title = $1, author = $2, published_year = $3, type_of_book = $4
      WHERE id = $5
    `;
    const result = await db.query(query, [title, author, year, genre, id]);
    console.log("The book was successfully updated.");
    console.log(result);

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

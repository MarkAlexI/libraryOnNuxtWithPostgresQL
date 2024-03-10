export default defineEventHandler(async (event) => {
  const startTime = Date.now();
  const db = await createClient();
  const { id } = getQuery(event);

  try {
    const duration = Date.now() - startTime;

    const query = {
      text: 'DELETE FROM books WHERE id = $1',
      values: [id],
    };
    const result = await db.query(query);
    console.log("The book was successfully deleted.");

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

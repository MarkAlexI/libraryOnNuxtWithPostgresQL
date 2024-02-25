export default defineEventHandler(async () => {
  const startTime = Date.now();
  const db = await createClient();

  try {
    const { rows: books } = await db.query("SELECT * FROM books");
    const duration = Date.now() - startTime;

    return {
      books,
      duration,
    };
  } catch (error) {
    console.log(error.message, "query error");
  } finally {
    await db.end();
    console.log("End of connection.");
  }
});

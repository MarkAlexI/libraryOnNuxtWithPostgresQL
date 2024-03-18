import crypto from "node:crypto";

export default defineEventHandler(async (event) => {
  const db = await createClient();
  const { email, password } = await readBody(event);

  try {
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const existingUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (existingUser.rows.length > 0) {
      return {
        success: false,
        message: "User already exists"
      };
    } else {
      await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashedPassword]);

      return {
        success: true
      };
    }
  } catch(error) {
    console.log(error);
    return {
      success: false,
      payload: error
    };
  }
});

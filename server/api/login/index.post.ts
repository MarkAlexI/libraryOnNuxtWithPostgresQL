import crypto from "node:crypto";

export default defineEventHandler(async (event) => {
  const db = await createClient();
  const { email, password } = await readBody(event);

  try {
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const existingUser = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (existingUser.rows.length > 0) {
      const user = existingUser.rows[0];

      if (user.password === hashedPassword) {
        return {
          success: true,
          message: "OK",
        };
      } else {
        return {
          success: false,
          message: "Some credentials are wrong.",
        };
      }
    } else {
      return {
        success: false,
        message: "User not found.",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      payload: error,
    };
  }
});

export default defineEventHandler(async (event) => {
  try {
    // TODO: Validate login-password request body
    const { email, password } = await readBody(event);

    // Find user by email
    const { id, role, password: hashedPassword } = await prisma.user.findUniqueOrThrow({ where: { email } });

    // Check if password is correct
    if (!verifyPassword(hashedPassword, password)) {
      throw new Error("Invalid password");
    }

    // Set user session
    await setUserSession(event, { user: { id, role } });

    return setResponseStatus(event, 201);
  }
  catch (error) {
    // Normalize error response
    return createError({ statusCode: 400, statusMessage: "Login failed", data: error });
  }
});

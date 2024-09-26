import { sendMail } from "~/utils/mailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { toolName, toolWebsite, description } = body;
  const config = useRuntimeConfig();

  try {
    await sendMail({
      to: config.public.emailUser,
      subject: "New Tool Submission",
      text: `
        New tool submission:
        Tool Name: ${toolName}
        Tool Website: ${toolWebsite || "Not provided"}
        Description: ${description}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to submit tool",
    });
  }
});

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  let parsedData;
  try {
    const rawData = await req.text();
    parsedData = JSON.parse(rawData);
  } catch (error) {
    console.error(error);
    return new NextResponse("Error parsing data", { status: 400 });
  }

  const { name, email, message } = parsedData;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_EMAIL,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  try {
    const mailOptions = {
      from: "sergio@artrid.net",
      to: email,
      subject: `Sergioo.xyz | Thank you for your message ${name}`,
      text: `Thank you for your message ${name}! I will get back to you as soon as possible.`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("[SEND_MAIL_ERROR]", error);
        return new NextResponse("Error sending email", { status: 500 });
      } else {
        console.log("Email sent!" + info.response);
      }
    });
  } catch (error) {
    console.log("[SEND_MAIL_ERROR]", error);
    return new NextResponse("Error sending email", { status: 500 });
  }

  try {
    transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_EMAIL,
      subject: `Sergioo.xyz | New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("[SEND_MAIL_SUCCESS]");
    return new NextResponse("Email sent", { status: 200 });
  } catch (error) {
    console.log("[SEND_MAIL_ERROR]", error);
    return new NextResponse("Error sending email", { status: 500 });
  }
};

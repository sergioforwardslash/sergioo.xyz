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
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.error(err);
        return new NextResponse("Error sending email", { status: 500 });
      } else {
        console.log("Email sent!");
      }
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error sending email", { status: 500 });
  }

  try {
    transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_EMAIL,
      subject: `Sergioo.xyz | New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new NextResponse("Email sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error sending email", { status: 500 });
  }
};

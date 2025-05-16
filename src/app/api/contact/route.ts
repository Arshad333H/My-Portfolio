import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:process.env.EMAIL_SENDER_USER,
        pass:process.env.EMAIL_SENDER_PASS,
    }
})


export async function POST(request: Request) {
    const { firstname, lastname, email, message } = await request.json();
    try {
        if (!firstname || !lastname || !email || !message) {
            return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
        }
        const mailOptions = {
            from: process.env.EMAIL_SENDER_USER,
            to: process.env.EMAIL_RECIEVER_USER,
            subject: "Contact form submission" ,
            text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${message}`,
        };
        await transporter.sendMail(mailOptions)
            
                return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
            
        ;
    } catch (error) {
        return NextResponse.json({ message: "Error sending email",error }, { status: 500 });
    }

}

import nodemailer from 'nodemailer';
import auth from '../auth/auth';

const { EMAIL_USER, EMAIL_RECIPIENT, SMS_RECIPIENT } = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth,
});

export const sendEmail = (info) => {
  const string = JSON.stringify(info);
  return (
    transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_RECIPIENT,
      subject: 'Website Order Request',
      text: string,
      html: string,
    })
  );
};

export const sendSMS = (info) => {
  const string = JSON.stringify(info);
  return (
    transporter.sendMail({
      from: EMAIL_USER,
      to: SMS_RECIPIENT,
      subject: 'Website Order Request',
      text: string,
      html: string,
    })
  );
};

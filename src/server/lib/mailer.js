
import nodemailer from 'nodemailer';
import auth from '../auth/auth';

const { EMAIL_USER, EMAIL_RECIPIENT } = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth,
});

const sendMail = (info) => {
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

export default sendMail;

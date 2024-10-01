import twilio from "twilio";
import dotenv from 'dotenv';
dotenv.config();

const client = twilio(process.env.TWILIO_ACOUNT_SID,process.env.TWILIO_TOKEN)

export default client;

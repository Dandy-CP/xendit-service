import { Xendit } from "xendit-node";
import dotenv from "dotenv";

dotenv.config();

const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY,
});

export default xenditClient;

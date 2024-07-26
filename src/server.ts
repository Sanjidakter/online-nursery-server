import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  db_url: process.env.DB_URL
};

async function main() {
  try {
    if (!config.db_url) {
      throw new Error("DB_URL is not defined in the environment variables");
    }

    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.error("Error starting the server:", err);
  }
}

main();

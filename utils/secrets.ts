const logger = require("./logger");
const dotenv = require("dotenv");
const fs = require("fs");

if (fs.existsSync(".env")) {
  console.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  console.debug("Using .env.example file to supply config environment variables");
  dotenv.config({ path: ".env.example" });  // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env["SESSION_SECRET"];
export const MONGODB_URI = "mongodb://localhost:27017/enotify"; // prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];
// export const MONGODB_URI = "mongodb://teamjullu:jullu2018@cluster0-shard-00-00-xetha.mongodb.net:27017,cluster0-shard-00-01-xetha.mongodb.net:27017,cluster0-shard-00-02-xetha.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
export const Email_user = "teamjullu@gmail.com";
// export const MONGODB_URI = "mongodb://localhost:27017/test"; // prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];


export const Email_password = "jullu2018";

export const fromEmail = '"jullu team 👻" <teamjullu@gmail.com>';
export const JWT_SECRET = "jwt_key";  // prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];

export const msg91_authkey = "261000Atw1QkV4w5c553b5e";

export const firebase_notification_authorization = "key=AAAABskP2gA:APA91bGda01t1dEwJ1OyWqeUks59FbGfgQY3MLT5YwuHMvnIPK6-Vpy7zgs_s4GsOl9CYJ5_G8cRbaQJBIGt1ULHWbAz-x9PzbyucAwknncwk4SPLDbWUKCHhoA8guAGj0Qw1HXA8ahF";

if (!SESSION_SECRET) {
  console.error("No client secret. Set SESSION_SECRET environment variable.");
  process.exit(1);
}

if (!MONGODB_URI) {
  console.error("No mongo connection string. Set MONGODB_URI environment variable.");
  process.exit(1);
}

/**
 *  Collection name
 */
export const COL_SUBSCRIBED = "subscriptions";
export const COL_STUDENTS = "students";
export const COL_FEE_TRANSACTION = "fee_transaction";
export const COL_FEE_STRUCTURE = "fee_structure";
export const COL_EMSG = "emsgs";
export const COL_EMSG_TEMPLATE = "message_template";

export const COL_ACCESS = "access";
export const COL_ORGANIZATIONS = "organizations";
export const COL_EVENTS = "events";
export const COL_USERS = "users";
export const COL_ADMINS = "admins";
export const COL_AUTH = "auth";
export const COL_OTP = "otp";

export const COL_UPLOADED_FILES = "upload_file";

export const COL_PAYMENT = "payment";

export enum AccessLevel {
  USER = "user",
  ADMIN = "admin",
  SUPER = "super"
}

export const PaytmConfig = {
  mid: "qApBHH22843135350988",
  key: "EU3wu9A9ReIuq0XK",
  website: "WEBSTAGING"
};

/**
 * Validation const
 */

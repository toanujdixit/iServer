const logger = require("./logger");
const dotenv = require("dotenv");
const fs = require("fs");


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

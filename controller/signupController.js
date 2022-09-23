const logger = require("../utils/logger")
const user = [];
module.exports = {
  signup: async (req, res, next) => {
    user.push(req.body);
    res.status(201).send("ok");
  }

}
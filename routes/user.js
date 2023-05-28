let express = require("express");
let router = express.Router();
let handler = require("./../controller/user");
let admin = require("./../middleware/admin");
let auth = require("./../middleware/auth");

// protected routes
// auth
router.get("/user", auth, handler.getUser);
// admin
router.get("/users", admin, handler.getUsers);

module.exports = router;

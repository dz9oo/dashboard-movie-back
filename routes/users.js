const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user.controller");
const checkAuth = require("../middleware/checkAuth");

router.get("/", user_controller.user_list);
router.get("/:id", user_controller.user_detail);
router.post("/signup", user_controller.user_signup);
router.delete("/:id", user_controller.user_delete);
router.put("/:id", user_controller.user_edit);
router.post("/signin", user_controller.user_signin);

module.exports = router;

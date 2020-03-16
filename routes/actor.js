const express = require("express");
const router = express.Router();
const actor_controller = require("../controllers/actor.controller");
const checkAuth = require("../middleware/checkAuth");

router.get("/", actor_controller.actor_list);
router.get("/:id", actor_controller.actor_detail);
router.post("/", actor_controller.actor_add);
router.delete("/:id", actor_controller.actor_delete);
router.put("/:id", actor_controller.actor_edit);

module.exports = router;

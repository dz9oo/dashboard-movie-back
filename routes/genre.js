const express = require("express");
const router = express.Router();
const genre_controller = require("../controllers/genre.controller");
const checkAuth = require("../middleware/checkAuth");

router.get("/", genre_controller.genre_list);
router.get("/:id", genre_controller.genre_detail);
router.post("/", genre_controller.genre_add);
router.delete("/:id", genre_controller.genre_delete);
router.put("/:id", genre_controller.genre_edit);

module.exports = router;

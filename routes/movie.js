const express = require("express");
const router = express.Router();
const movie_controller = require("../controllers/movie.controller");
const checkAuth = require("../middleware/checkAuth");

router.get("/", movie_controller.movie_list);
router.get("/:id", movie_controller.movie_detail);
router.post("/", movie_controller.movie_add);
router.delete("/:id", movie_controller.movie_delete);
router.put("/:id", movie_controller.movie_edit);

module.exports = router;

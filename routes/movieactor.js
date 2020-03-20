const express = require("express");
const router = express.Router();
const movieActor_controller = require("../controllers/movieActor.controller");
const checkAuth = require("../middleware/checkAuth");

router.get("/", movieActor_controller.movieactor_list);
router.get("/count", movieActor_controller.movieactor_count);
router.get("/:id", movieActor_controller.movieactor_detail);
router.post("/", movieActor_controller.movieactor_add);
router.delete("/:id", movieActor_controller.movieactor_delete);
router.put("/:id", movieActor_controller.movieactor_edit);

module.exports = router;

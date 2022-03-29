const { clubControllers } = require("../controllers");

const router = require("express").Router();

router.get("/", clubControllers.getAllClub);
router.post("/", clubControllers.createNewClub);
router.patch("/:id", clubControllers.editClub);
router.delete("/:id", clubControllers.deleteClub);

module.exports = router;

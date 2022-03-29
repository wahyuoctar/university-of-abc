const router = require("express").Router();

const { fakultasControllers } = require("../controllers");

router.get("/", fakultasControllers.getFakultas);
router.post("/", fakultasControllers.createNewFakultas);
router.patch("/:id", fakultasControllers.editFakultas);
router.delete("/:id", fakultasControllers.deleteFakultas);

module.exports = router;

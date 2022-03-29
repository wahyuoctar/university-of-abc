const router = require("express").Router();
const { dosenControllers } = require("../controllers");

router.get("/", dosenControllers.getAllDosen);
router.post("/", dosenControllers.createNewDosen);
router.patch("/:id", dosenControllers.editDosen);
router.delete("/:id", dosenControllers.deleteDosen);

module.exports = router;

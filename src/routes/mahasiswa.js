const { mahasiswaControllers } = require("../controllers");

const router = require("express").Router();

router.get("/", mahasiswaControllers.getAllMahasiswaData);
router.post("/", mahasiswaControllers.createNewMahasiswa);
router.patch("/:id", mahasiswaControllers.editMahasiswa);
router.delete("/:id", mahasiswaControllers.deleteMahasiswa);

module.exports = router;

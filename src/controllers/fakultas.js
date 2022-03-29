const { dbQuery } = require("../database");

const fakultasControllers = {
  getFakultas: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM fakultas`;

      const dbResult = await dbQuery(sqlQuery);

      res.status(201).json({
        message: "get all fakultas",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  createNewFakultas: async (req, res) => {
    try {
      const { nama_fakultas, dosen_id = null } = req.body;

      const sqlQuery = `INSERT INTO fakultas VALUES (0, ?, ?)`;

      let replacement = [nama_fakultas, dosen_id];

      const dbResult = await dbQuery(sqlQuery, replacement);

      res.status(200).json({
        message: "new fakultas added",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  editFakultas: async (req, res) => {
    try {
      const fakultasId = req.params.id;
      const { nama_fakultas, dosen_id } = req.body;

      let editQuery = "";

      if (nama_fakultas) {
        editQuery += `nama_fakultas = "${nama_fakultas}", `;
      }
      if (dosen_id) {
        editQuery += `dosen_id = ${dosen_id}, `;
      }

      editQuery = editQuery.slice(0, -2);

      const sqlQuery = `UPDATE fakultas SET ${editQuery} WHERE id = ${fakultasId}`;

      const dbResult = await dbQuery(sqlQuery);

      res.status(200).json({
        message: "fakultas edited",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  deleteFakultas: async (req, res) => {
    try {
      const fakultasId = req.params.id;

      const sqlQuery = `DELETE FROM fakultas WHERE id = ?`;
      const replacement = [fakultasId];

      const dbResult = dbQuery(sqlQuery, replacement);

      res.status(200).json({
        message: "fakultas deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
};

module.exports = fakultasControllers;

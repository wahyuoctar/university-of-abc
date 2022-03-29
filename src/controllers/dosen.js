const { dbQuery } = require("../database");

const dosenControllers = {
  getAllDosen: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM dosen`;

      const dbResult = await dbQuery(sqlQuery);

      res.status(201).json({
        message: "get all dosen",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  createNewDosen: async (req, res) => {
    try {
      const { full_name, supervisor_id = null, fakultas_id = null } = req.body;

      const sqlQuery = `INSERT INTO dosen VALUES (0, ?, ?, ?)`;

      let replacement = [full_name, fakultas_id, supervisor_id];

      const dbResult = await dbQuery(sqlQuery, replacement);

      res.status(200).json({
        message: "new dosen added",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  editDosen: async (req, res) => {
    try {
      const dosenId = req.params.id;

      const { full_name, supervisor_id, fakultas_id } = req.body;

      let editQuery = "";

      if (full_name) {
        editQuery += `full_name = "${full_name}", `;
      }
      if (supervisor_id) {
        editQuery += `supervisor_id = ${supervisor_id}, `;
      }
      if (fakultas_id) {
        editQuery += `fakultas_id = ${fakultas_id}, `;
      }

      editQuery = editQuery.slice(0, -2);

      const sqlQuery = `UPDATE dosen SET ${editQuery} WHERE id = ${dosenId}`;

      const dbResult = await dbQuery(sqlQuery);

      res.status(200).json({
        message: "dosen edited",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "sever error",
      });
    }
  },
  deleteDosen: async (req, res) => {
    try {
      const dosenId = req.params.id;

      const sqlQuery = `DELETE FROM dosen WHERE id = ?`;

      const replacement = [dosenId];

      const dbResult = await dbQuery(sqlQuery, replacement);

      res.status(200).json({
        message: "dosen deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
};

module.exports = dosenControllers;

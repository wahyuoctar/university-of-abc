const { dbQuery } = require("../database/index");

const mahasiswaControllers = {
    getAllMahasiswaData: async (req, res) => {
        try {
            let sqlQuery = `SELECT * FROM mahasiswa;`

            let dbResult = await dbQuery(sqlQuery)

            res.status(200).json({
                message: "Mahasiswa Data Found!",
                result: dbResult
            })
            
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    createNewMahasiswa: async (req, res) => {
        try {
            const {full_name, fakultas_id} = req.body
            const sqlQuery = `INSERT INTO mahasiswa VALUES(0, ?, ?)`
            const replacement = [full_name, fakultas_id]

            let dbResult = await dbQuery(sqlQuery, replacement)

            res.status(201).json({
                message: "Mahasiswa Added",
                result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    editMahasiswa: async (req, res) => {
        try {
            const mahasiswaId = req.params.id
            const {full_name, fakultas_id} = req.body

            let editQuery = ""
            if (full_name) {
                editQuery += `full_name = "${full_name}", `
            }
            if (fakultas_id) {
                editQuery += `fakultas_id = ${fakultas_id}, `
            }

            editQuery = editQuery.slice(0, -2)

            const sqlQuery = `UPDATE mahasiswa SET ${editQuery} WHERE id = ${mahasiswaId};`

            const dbResult = await dbQuery(sqlQuery)

            console.log(editQuery);
            res.status(200).json({
                message: "Mahasiswa Updated",
                result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    deleteMahasiswa: async (req, res) => {
        try {
            const mahasiswaId = req.params.id
            const replacement = [mahasiswaId]
            const sqlQuery = `DELETE FROM mahasiswa WHERE id = ?;`

            const dbResult = await dbQuery(sqlQuery, replacement)

            console.log(`Mahasiswa id: ${mahasiswaId} Deleted`);
            res.status(202).json({
                message: "Mahasiswa Deleted",
                result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    }
};

module.exports = mahasiswaControllers;

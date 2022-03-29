const { dbQuery } = require("../database");

const clubControllers = {
    getAllClub: async (req, res) => {
        try {
            const sqlQuery = `SELECT * FROM club;`

            const dbResult = await dbQuery(sqlQuery)

            res.status(201).json({
                message: "Club Found!",
                result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    createNewClub: async (req, res) => {
        try {
            const {nama_club, mahasiswa_id} = req.body
            const replacement = [nama_club, mahasiswa_id]

            const sqlQuery = `INSERT INTO club VALUES(0, ?, ?);`
            const dbResult = await dbQuery(sqlQuery, replacement)

            console.log(sqlQuery);
            res.status(201).json({
                message: "Club Added",
                result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    deleteClub: async (req, res) => {
        try {
            const clubId = req.params.id
            const replacement = [clubId]
            const sqlQuery = `DELETE FROM club WHERE id = ?;`

            const dbResult = await dbQuery(sqlQuery, replacement)

            console.log(`clubId ${clubId} Deleted`);
            res.status(202).json({
                message: `clubId ${clubId} Deleted`,
                result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    editClub: async (req, res) => {
        try {
            const clubId = req.params.id
            const {nama_club, mahasiswa_id} = req.body
            const replacement = [clubId]
            let editQuery = ""

            if (nama_club) {
                editQuery += `nama_club = "${nama_club}", `
            }
            if (mahasiswa_id) {
                editQuery += `mahasiswa_id = ${mahasiswa_id}, `
            }

            editQuery = editQuery.slice(0, -2)
            const sqlQuery = `UPDATE club SET ${editQuery} WHERE id = ?;`

            const dbResult = await dbQuery(sqlQuery, replacement)
            
            console.log(editQuery);

            res.status(200).json({
                message: "Club Edited",
                result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },
};

module.exports = clubControllers;

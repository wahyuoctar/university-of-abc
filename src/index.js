const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT
app.use(cors())
app.use(express.json())

app.use("/mahasiswa")
app.use("/dosen")
app.use("/matakuliah")
app.use("/fakultas")
app.use("/club")

app.listen(PORT, () => {
    console.log("Listening in PORT: ", PORT);
})
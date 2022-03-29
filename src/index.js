const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

const {
  clubRoutes,
  dosenRoutes,
  fakultasRoutes,
  mahasiswaRoutes,
  matakuliahRoutes,
} = require("./routes");

app.use("/mahasiswa", mahasiswaRoutes);
app.use("/dosen", dosenRoutes);
app.use("/matakuliah", matakuliahRoutes);
app.use("/fakultas", fakultasRoutes);
app.use("/club", clubRoutes);

app.listen(PORT, () => {
  console.log("Listening in PORT: ", PORT);
});

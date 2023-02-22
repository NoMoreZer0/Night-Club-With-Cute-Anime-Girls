const cors =  require('cors');
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const animeRoute = require("./routes/animes")
const listRoute = require("./routes/lists")

const app = express()


dotenv.config();

mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB is connected")).catch((err) => console.log(err));

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/animes", animeRoute);
app.use("/api/lists", listRoute);

app.listen(4000, () => {
  console.log("Server started on port 4000")
});
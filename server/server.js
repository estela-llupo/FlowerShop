const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port =  process.env.port || 8000;

require("./config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/team.routes")(app);

app.listen(port, () => {
    console.log(`Listening on port ${port})`)});
const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "petshelterDB"
const app = express();

app.use(cors());
app.use(express.json());

require("./server/config/mongoose.config")(db_name);
require("./server/routes/Pets.routes")(app);


app.listen(port, ()=> console.log(`Listening on port ${port}`))
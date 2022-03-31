
//ecessary dependencies
const express = require("express")
const cors = require('cors')
const app = express()

// config mongoose
require("./configs/mongoose.configs")

// express config
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

// import routes 
require("./routes/recipe.routes")(app)

// listen to the port
const port = 8000;
app.listen(port, () => console.log(`Server is cranked up on Port: ${port}`));
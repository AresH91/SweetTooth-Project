// Import Mongoose 
const mongoose = require('mongoose');

// Connecting/Creating to Project DB
mongoose.connect("mongodb://localhost/sweet-tooth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Failed to establish a connection to the database", err));
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.4x9ytlo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.static(path.join(__dirname + '/public')));

// app.get("/", (req, res) => {
//     res.render("./views/index.html");
// });
app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Resource Not Found<h1>`);
})
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Successful connection to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

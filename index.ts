import express, { Application } from 'express';
const app: Application = express();

app.use(express.static("public"));
app.use("/", require("./routes/Other"));
app.use("/", require("./routes/Memes"));
app.use("/", require("./routes/Backgrounds"));

app.listen(1337, () => {
    console.log("Server is running on port 1337");
})
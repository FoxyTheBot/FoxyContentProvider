import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get("/image/:commandName", (req, res) => {
    const { commandName } = req.params;

    try {
        const commandFiles = fs.readdirSync(`./assets/commands/images/${commandName}`);
        const asset = commandFiles[(Math.floor(Math.random() * commandFiles.length))]
        res.send({ url: `https://cdn.foxybot.win/images/${commandName}/${asset}`});
    } catch(e) {
        res.status(404);
        console.error(e)
    }
});

router.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./pages/" })
})
export = router;
import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get("/roleplay/:commandName", (req, res) => {
    const { commandName } = req.params;

    try {
        const commandFiles = fs.readdirSync(`./assets/commands/roleplay/${commandName}`);
        const asset = commandFiles[(Math.floor(Math.random() * commandFiles.length))]
        res.sendFile(`./commands/roleplay/${commandName}/${asset}`, { root: "./assets" });
    } catch(e) {
        res.sendFile("404.png", { root: "./assets/" });
        console.error(e)
    }
});

router.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./pages/" })
})
export = router;
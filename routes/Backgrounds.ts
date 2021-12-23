import express from 'express';
import { bglist } from '../data/backgrounds.json';
const routes = express.Router();

routes.get(`/backgrounds/:id`, (req, res) => {
    const id = req.params.id;
    const background = bglist.find(bg => bg.id === id);
    if (background) {
       res.sendFile(background.filename, { root: "./public/assets/backgrounds" }); 
    } else {
        res.sendFile("404.png", { root: "./public/assets/" });
    }
})

export = routes;
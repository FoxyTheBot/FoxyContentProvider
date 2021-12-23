import express from 'express';
import { bglist } from '../data/backgrounds.json';
const routes = express.Router();

routes.get(`/backgrounds/${bglist.map(r => r.id === "")}`, (req, res) => {
    // to do
})
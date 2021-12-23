import express from 'express';
const router = express.Router();

router.get("/alert/error.mp4", (req, res) => {
    res.sendFile("error.mp4", { root: "./public/assets"});
});

router.get("/", (req, res) => {
    res.redirect("https://foxywebsite.ml");
})
export = router;
import express from 'express';
const router = express.Router();

router.get("/memes/laranjo.png", (req, res) => {
    res.sendFile("laranjo.jpeg", { root: "./public/assets" });
});

router.get("/memes/fodase.png", (req, res) => {
    res.sendFile("fodase.jpeg", { root: "./public/assets" });
});

router.get("/memes/notstonks.png", (req, res) => {
    res.sendFile("notstonks.png", { root: "./public/assets" });
});

router.get("/memes/stonks.png",(req, res) => {
    res.sendFile("stonks.png", { root: "./public/assets" });
});

router.get("/memes/windows.png", (req, res) => {
    res.sendFile("windows.png", { root: "./public/assets" });
});

router.get("/memes/comunismo.png", (req, res) => {
    res.sendFile("comunismo.png", { root: "./public/assets" });
});

router.get("/memes/windows.png", (req, res) => {
  res.sendFile("windows.png", { root: "./public/assets"})
});

router.get("/memes/namorada.png", (req, res) => {
  res.sendFile("namorada.png", { root: "./public/assets"})
});

router.get("/memes/perfeito.png", (req, res) => {
  res.sendFile("perfeito.png", { root: "./public/assets"})
})

export = router;
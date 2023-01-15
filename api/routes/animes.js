const router = require("express").Router();
const Anime = require("../models/Anime");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newAnime = new Anime(req.body);
    try {
      const savedAnime = await newAnime.save();
      res.status(201).json(savedAnime);
    } catch (err) {
      res.json(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedAnime = await Anime.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
      res.status(200).json(updatedAnime);
    } catch (err) {
      res.json(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Anime.findByIdAndDelete(req.params.id);
      res.status(200).json("The anime is deleted...");
    } catch (err) {
      res.json(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET
router.get("/find/:id", verify, async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    res.status(200).json(anime);
  } catch (err) {
    res.json(500).json(err);
  }
});

//GET RANDOM
router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let anime;
  try {
    if (type == "series") {
      anime = await Anime.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 }},
      ]);
    } else {
      anime = await Anime.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 }},
      ]);
    }
    res.status(200).json(anime)
  } catch (err) {
    res.json(500).json(err);
  }
});

//GET ALL
router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const animes = await Anime.find();
      res.status(200).json(animes.reverse());
    } catch (err) {
      res.json(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
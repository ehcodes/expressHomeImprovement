const router = require("express").Router();
const homes = require("../controllers/homesController");
const homeSeed = require("../homeSeed")

router.get("/", homes.getAllHomes);

router.get('/homes/seed', (req, res)=>{
  Home.create(homeSeed, (err, data)=>{
      res.redirect('/');
  })
});

module.exports = router;
const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => res.send("This is root!"));

router.post("/lambDishes", controllers.createLambHaneeth);

router.get("/lambDishes", controllers.getAllLambHaneeth);

router.get("/lambDishes/:id", controllers.getLambHaneethById);

router.post("/lambDishes/:id", controllers.updateLambHaneeth);

router.delete("/lambDishes/:id", controllers.deleteLambHaneeth);

router.get(
  "/homeCountries/:id/lambDishes",
  controllers.getLambHaneethByCountry
);

router.post("/homeCountries", controllers.createcountry);

router.get("/homeCountries", controllers.getAllcountry);

router.get("/homeCountries/:id", controllers.getcountryById);

router.post("/homeCountries/:id", controllers.updatecountry);

router.delete("/homeCountries/:id", controllers.deletecountry);

module.exports = router;

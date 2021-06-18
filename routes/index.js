const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => res.send("This is root!"));

router.post("/LambDish", controllers.createLambDish);

router.get("/LambDish", controllers.getAllLambDish);

router.get("/LambDish/:id", controllers.getLambDishById);

router.post("/LambDish/:id", controllers.updateLambDish);

router.delete("/LambDish/:id", controllers.deleteLambDish);

router.get("/homeCountries/:id/LambDish", controllers.getLambDishByCountry);

router.post("/homeCountries", controllers.createHomeCountry);

router.get("/homeCountries", controllers.getAllHomeCountry);

router.get("/homeCountries/:id", controllers.getHomeCountryById);

router.post("/homeCountries/:id", controllers.updateHomeCountry);

router.delete("/homeCountries/:id", controllers.deleteHomeCountry);

module.exports = router;

const db = require("../db");
const Lamb = require("../models/Dish");
const country = require("../models/Country");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const Location1 = await new country({
    name: "Italy",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  });
  Location1.save();

  const Location2 = await new country({
    name: "Pakistan",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
  });
  Location2.save();

  const Location3 = await new country({
    name: "Morocco",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  });
  Location3.save();

  const Location4 = await new country({
    name: "Yemen",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
  });
  Location4.save();

  const Location5 = await new country({
    name: "Turkey",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  });
  Location5.save();

  const lambDishes = [
    {
      name_of_dish: "Italian Lamb Stew",
      home_country: Location1._id,
      ingredients: "lamb, onions, carrots, celery, potatoes, peas, white wine",
      img:
        "https://photos.bigoven.com/recipe/hero/italian-lamb-stew.jpg?h=500&w=500",
    },
    {
      name_of_dish: "Pakistan Mutton Karahi",
      home_country: Location2._id,
      ingredients:
        "lamb, shan masala, cilantro, corriander, red chilli, onions, long-grain, white rice, saffron Salt and pepper",
      img:
        "https://i0.wp.com/fatimacooks.net/wp-content/uploads/2020/03/IMG_3066-scaled.jpg?resize=1152%2C1536&ssl=1",
    },
    {
      name_of_dish: "Moroccan Slow-Cooked Lamb",
      home_country: Location3._id,
      ingredients:
        "cumin, coriander, salt, lamb, salt, fennel seeds, cayenne pepper, olive oil",
      img:
        "https://assets.epicurious.com/photos/560de52cf3a00aeb2f1d5328/6:4/w_620%2Ch_413/231597.jpg",
    },
    {
      name_of_dish: "Yemen Lamb Haneeth",
      home_country: Location4._id,
      ingredients:
        "Lamb, green onions, chives, garlic, cumin, salt, tumeric, cloves, olive oil",
      img:
        "https://everylittlecrumb.com/wp-content/uploads/lambhaneeth-10-683x1024.jpg",
    },
    {
      name_of_dish: "COLOMBIAN BEEF STEW (CARNE GUISADA)",
      home_country: Location5._id,
      ingredients:
        " (3- to 4-pound) boneless lamb shoulder, trimmed of excess fat Kosher salt and black pepper  ½ teaspoon Maras pepper or regular red-pepper flakes (optional)2 tablespoons extra-virgin olive oil 2 tablespoons lemon juice (from 1 small lemon)2 tablespoons pomegranate molasses (optional)",
      img:
        "https://static01.nyt.com/images/2019/11/06/dining/01Tanisrex2/merlin_163467744_8958bd0d-5c05-4300-9820-8fdcff5839fd-articleLarge.jpg",
    },
  ];

  await Lamb.insertMany(lambDishes);

  console.log("created lamb dishes");
};

const run = async () => {
  await main();
  db.close();
};

run();

const db = require("../db");
const dish = require("../models/Dish");
const country = require("../models/Country");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const location1 = await new country({
    name: "Italy",
  });
  location1.save();

  const location2 = await new country({
    name: "Pakistan",
  });
  location2.save();

  const location3 = await new country({
    name: "Morocco",
  });
  location3.save();

  const location4 = await new country({
    name: "Yemen",
  });
  location4.save();

  const dish = [
    {
      title: "Italian Lamb Stew",
      ingrediants: "lamb, onions, carrots, celery, potatoes, peas, white wine",
      linkfoto:
        "https://photos.bigoven.com/recipe/hero/italian-lamb-stew.jpg?h=500&w=500",
    },
    {
      title: "Pakistan Mutton Karahi",
      ingrediants:
        "lamb, shan masala, cilantro, corriander, red chilli, onions",
      linkfoto:
        "https://i0.wp.com/fatimacooks.net/wp-content/uploads/2020/03/IMG_3066-scaled.jpg?resize=1152%2C1536&ssl=1",
    },
    {
      title: "Moroccan Slow-Cooked Lamb",
      ingrediants:
        "cumin, coriander, salt, lamb, salt, fennel seeds, cayenne pepper, olive oil",
      linkfoto:
        "https://assets.epicurious.com/photos/560de52cf3a00aeb2f1d5328/6:4/w_620%2Ch_413/231597.jpg",
    },
    {
      title: "Yemen Lamb Haneeth",
      ingrediants:
        "Lamb, green onions, chives, garlic, cumin, salt, tumeric, cloves, olive oil",
      linkfoto:
        "https://everylittlecrumb.com/wp-content/uploads/lambhaneeth-10-683x1024.jpg",
    },
  ];
  await dish.insertMant(dish);
  console.log("Added receipe/dish");
};
const run = async () => {
  await main();
  db.close();
};
run();

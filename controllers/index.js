const LambHaneeth = require("../models/Dish");
const country = require("../models/Country");

const createLambHaneeth = async (req, res) => {
  try {
    const dish = await new LambHaneeth(req.body);
    await dish.save();
    return res.status(201).json({ dish });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllLambHaneeth = async (req, res) => {
  try {
    const dishes = await LambHaneeth.find();
    return res.status(200).json({ dishes });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getLambHaneethById = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await LambHaneeth.findById(id);
    if (dish) {
      return res.status(200).json({ dish });
    }
    return res.status(404).send("lamb dish not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateLambHaneeth = async (req, res) => {
  try {
    const { id } = req.params;
    await LambHaneeth.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, dish) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!dish) {
          res.status(500).send("lamb dish not found")
        }
        return res.status(200).json(dish);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLambHaneeth = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await LambHaneeth.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("lamb dish deleted");
    }
    throw new Error("lamb dish not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const getLambHaneethByCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const countries = await country.find({ home_country: id });
    return res.status(200).json({ countries });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const createcountry = async (req, res) => {
  try {
    const country = await new country(req.body);
    await country.save();
    return res.status(201).json({ country });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const getAllcountry = async (req, res) => {
  try {
    const country = await country.find();
    return res.status(200).json({ country });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const getcountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await country.findById(id);
    if (country) {
      return res.status(200).json({ country });  
    }
    return res.status(404).send("country not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const updatecountry = async (req, res) => {
  try {
    const { id } = req.params;
    await country.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, country) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!country) {
          res.status(500).send("country not found")
        }
        return res.status(200).json(country);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deletecountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await country.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("country deleted");
    }
    throw new Error("country not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



module.exports = {
  createLambHaneeth,
  getAllLambHaneeth,
  getLambHaneethById,
  updateLambHaneeth,
  deleteLambHaneeth,
  getLambHaneethByCountry,
  createcountry,
  getAllcountry,
  getcountryById,
  updatecountry,
  deletecountry
};
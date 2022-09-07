import { Drink } from "../models/Drink.model.js";

const drinksController = {
  getDrinks: async (req, res) => {
    try {
         const getDrinks =  await Drink.find({}, {name: 1, _id: 1, price: 1, in_stock: 1});
         return res.json(getDrinks)
    //   await Drink.find({}, (err, data) => {
    //     return res.json(data)
    //   });
    } catch (err) {
      console.log(err);
    }
  },

   getinStock: async(req, res) => {
    try {
       const getByStock = await Drink.find({in_stock: true})
       return res.json(getByStock)
    } catch (error) {
        console.log(error)
    }
   },

   getById: async(req, res) => {
     try {
        const getByiD = await Drink.findById(req.params.id)
        return res.json(getByiD)
     } catch (error) {
        console.log(error)
     } 
   },
    addDrinks: async (req, res) => {
    try {
    const addDrinks = await Drink.create({
      name: req.body.name,
      price: req.body.price,
      in_stock: req.body.in_stock,
      coffein: req.body.coffein,
      volume: req.body.volume,
      description: req.body.description,
    })
     return res.json(addDrinks)
    } catch (error) {
      console.log(error)
    }
  },
  deleteDrinks: async (req, res) => {
   try {
      const deleteDrinks = await Drink.findByIdAndDelete(req.params.id)
      return res.json(deleteDrinks);
   } catch (error) {
     return res.json({'error': error.message})
   }
  },
  updateDrinks: async (req, res) => {
    try {
        const upadateDrinks = await Drink.findByIdAndUpdate(req.params.id, req.body)
        return res.json(upadateDrinks)      
    } catch (error) {
        console.log(error)
    }
}
}

export { drinksController };

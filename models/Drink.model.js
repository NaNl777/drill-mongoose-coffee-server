import  mongoose  from "mongoose";

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  availability: Boolean,
  containCoffein: Boolean,
  volume: Number,
  description: String
});

const Drink = mongoose.model('Drink', drinkSchema)

export {Drink}
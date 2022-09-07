import { Router } from "express";
import { drinksController } from "../controllers/drinks.controller.js";

const drinkRouter = Router();

drinkRouter.get('/drinks', drinksController.getDrinks)
drinkRouter.get('/drinks/:id', drinksController.getById)
drinkRouter.get('/drinks/in_stock', drinksController.getinStock)

drinkRouter.delete('/drinks/:id', drinksController.deleteDrinks)
drinkRouter.patch('/drinks/:id', drinksController.updateDrinks)
drinkRouter.post('/drinks', drinksController.addDrinks)


export {drinkRouter}
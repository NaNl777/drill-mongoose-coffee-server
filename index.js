import  mongoose  from "mongoose";
import  express  from "express";
import { drinkRouter } from "./routes/drinks.route.js";


const app = express();
app.use(express.json())
app.use(drinkRouter)

const dbUrl = "mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/coffeee"

const port = 3050;

const start = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log("Connected")
    await app.listen(port, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log(error.message)
  }
}

start()

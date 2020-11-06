//Imports
import express from "express";
import { studentRouter } from "./routes/studentRouter.js";
import mongoose from "mongoose";

//Conexão com o MongoDB usando mongoose
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alex:alex120995@bootcamp.3ys29.mongodb.net/grades?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao Mongo DB Atlas com sucesso!");
  } catch (error) {
    console.log("Erro ao conectrar no Mongo DB Atlas.Error: " + error);
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log("API started"));

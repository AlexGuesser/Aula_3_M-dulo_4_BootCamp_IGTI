import express from "express";
import { studentModel } from "../models/studentModel.js";

const app = express();

//CREATE
app.post("/student", async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//RETRIEVE
app.get("/student", async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//UPDATE
app.patch("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const studentUpdated = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.send(studentUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE
app.delete("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const studentDeleted = await studentModel.findByIdAndDelete({ _id: id });
    if (!studentDeleted) {
      res.status(404).send("Documento não encontrado!");
    } else {
      res.status(200).send("Documento deletado!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export { app as studentRouter };

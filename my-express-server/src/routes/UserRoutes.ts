import express from "express";

import UserController from "../controller/UserController"; 

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new UserController();
  try{
    console.log(req.body)
    const response = await controller.createUser({
      email: String(req.body.email), 
      password: String(req.body.password)
    });
    return res.send(response);
  }catch(err){
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  const controller = new UserController();
  try{
    const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
  }catch{}
});

export default router;
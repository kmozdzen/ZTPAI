import express from "express";

import SecurityController from "../controller/SecurityController"; 

const router = express.Router();

router.post("/login-send", SecurityController.login);
router.post("/logout", ( req, res) => {
    const { token } = req.body;
})

export default router;
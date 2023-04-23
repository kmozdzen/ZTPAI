import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { validate } from "class-validator";

import { User } from "../entity/User";
import config from "../config/jwt";
import { AppDataSource } from "../config/database";

let user: User;

class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if email and password are set
    let { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
    }

    //Get user from database
    const userRepository = AppDataSource.getRepository(User);

    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      res.status(401).send();
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }
    const payload = { 
        userId: user.id, 
        email: user.email 
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      payload,
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    //res.send(token);

    res.json({token})
  };

}
export default AuthController;
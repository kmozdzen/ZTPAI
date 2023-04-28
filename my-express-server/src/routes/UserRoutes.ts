import express from "express";

import UserController from "../controller/UserController"; 

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Users
 */

/**
 * @swagger
 * components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            description: user email
 *          password:
 *            type: string
 *            description: user password
 *        example:
 *          email: a@mail.pl
 *          password: 1234 
 */


/**
   * @swagger
   * '/users/':
   *    get:
   *      description: Get all users
   *      tags: [Users]
   *      responses:
   *        200:
   *          description: Success
   *               
  */
router.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.send(response);
});

/**
   * @swagger
   * '/users/':
   *    post:
   *      description: Add user
   *      tags: [Users]
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#components/schemas/User'
   *      responses:
   *        200:
   *          description: Success
   *        404:
   *          description: User not found
   *        500:
   *          description: Some server error
*/
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

/**
   * @swagger
   * '/users/{id}':
   *    get:
   *      description: Get user
   *      tags: [Users]
   *      parameters:
   *      - in: path
   *        name: id
   *        description: user id
   *        required: true
   *      responses:
   *        200:
   *          description: Success
   *        404:
   *          description: User not found
   *        500:
   *          description: Some server error
*/
router.get("/:id", async (req, res) => {
  const controller = new UserController();
  try{
    const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
  }catch{}
});

/**
   * @swagger
   * '/users/{id}':
   *    put:
   *      description: Update user
   *      tags: [Users]
   *      parameters:
   *      - in: path
   *        name: id
   *        description: user id
   *        required: true
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#components/schemas/User'
   *      responses:
   *        200:
   *          description: Success
   *        404:
   *          description: User not found
   *        500:
   *          description: Some server error
*/
router.put("/:id", async (req, res) => {
  const controller = new UserController();
  try{
    const response = await controller.updateUser(req.params.id, {
      email: String(req.body.email), 
      password: String(req.body.password)
    });
    return res.send(response);
  }catch(err){
    console.log(err);
  }
});

/**
   * @swagger
   * '/users/{id}':
   *    delete:
   *      description: Delete user
   *      tags: [Users]
   *      parameters:
   *      - in: path
   *        name: id
   *        description: user id
   *        required: true
   *      responses:
   *        200:
   *          description: Success
   *        404:
   *          description: User not found
   *        500:
   *          description: Some server error
*/
router.delete("/:id", async (req, res) => {
  const controller = new UserController();
  try{
    const response = await controller.deleteUser(req.params.id);
    return res.send(response);
  }catch(err){
    console.log(err);
  }
});

export default router;
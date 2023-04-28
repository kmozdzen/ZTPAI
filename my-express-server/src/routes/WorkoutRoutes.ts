import express from "express";

import WorkoutController from "../controller/WorkoutController"; 

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Workout
 */

/**
 * @swagger
 * components:
 *    schemas:
 *      Workout:
 *        type: object
 *        required:
 *          - series
 *          - reps
 *          - weight
 *          - date
 *          - exerciseIdExercise
 *        properties:
 *          series:
 *            type: string
 *            description: series
 *          reps:
 *            type: string
 *            description: repetitions
 *          weight:
 *            type: string
 *            description: weight
 *          date:
 *            type: date
 *            description: date
 *        example:
 *          series: 3
 *          reps: 5
 *          weight: 100
 *          date: 2023-04-28
 */

/**
   * @swagger
   * '/workout/{id}':
   *    get:
   *      description: Get workout
   *      tags: [Workout]
   *      parameters:
   *      - in: path
   *        name: id
   *        description: workout id
   *        required: true
   *      responses:
   *        200:
   *          description: Success
   *        404:
   *          description: Workout not found
   *        500:
   *          description: Some server error
*/
router.get("/:id", async (req, res) => {
  const controller = new WorkoutController();
  try{
    const response = await controller.getWorkout(req.params.id);
  if (!response) res.status(404).send({ message: "No workout found" });
  return res.send(response);
  }catch{}
});

/**
   * @swagger
   * '/workout/':
   *    post:
   *      description: Add workout
   *      tags: [Workout]
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#components/schemas/Workout'
   *      responses:
   *        200:
   *          description: Success
   *        404:
   *          description: Workout not found
   *        500:
   *          description: Some server error
*/
router.post("/", async (req, res) => {
    const controller = new WorkoutController();
    try{
      console.log(req.body)
      const response = await controller.createWorkout({
        series: String(req.body.series), 
        reps: String(req.body.reps),
        weight: String(req.body.weight), 
        date: req.body.date
      });
      return res.send(response);
    }catch(err){
      console.log(err);
    }
  });

export default router;
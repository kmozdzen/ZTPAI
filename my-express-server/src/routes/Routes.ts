import express from "express";
import UserRoutes from "./UserRoutes";
import AuthRoutes from "./AuthRoutes"
import WorkoutRoutes from "./WorkoutRoutes"

const router = express.Router();

router.use("/users", UserRoutes);
router.use("/workout", WorkoutRoutes);
router.use("/", AuthRoutes);

export default router;
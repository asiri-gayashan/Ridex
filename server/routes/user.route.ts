import express from "express";
import { registerUser, verifyOtp, signUpNewUser } from "../controllers/user.controller";



const userRouter = express.Router();
userRouter.post("/registration", registerUser);


userRouter.post("/verify-otp", verifyOtp);
userRouter.put("/sign-up-user", signUpNewUser);


export default userRouter;


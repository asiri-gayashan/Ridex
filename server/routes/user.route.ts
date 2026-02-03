import express from "express";
import { registerUser, verifyOtp, signUpNewUser, sendingOtpToEmail, verifyingEmail} from "../controllers/user.controller";



const userRouter = express.Router();
userRouter.post("/registration", registerUser);


userRouter.post("/verify-otp", verifyOtp);
userRouter.put("/sign-up-user", signUpNewUser);
userRouter.post("/email-otp-request", sendingOtpToEmail);
userRouter.put("/email-otp-verify", verifyingEmail);


export default userRouter;


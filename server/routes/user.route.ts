import express from "express";
import { registerUser, verifyOtp, signUpNewUser,getLoggedInUserData, sendingOtpToEmail, verifyingEmail} from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/isAuthenticated";


const userRouter = express.Router();
userRouter.post("/registration", registerUser);
userRouter.post("/verify-otp", verifyOtp);

userRouter.post("/verify-otp", verifyOtp);
userRouter.put("/sign-up-user", signUpNewUser);
userRouter.post("/email-otp-request", sendingOtpToEmail);
userRouter.put("/email-otp-verify", verifyingEmail);

userRouter.get("/me", isAuthenticated, getLoggedInUserData);

export default userRouter;


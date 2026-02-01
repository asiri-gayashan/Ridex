require("dotenv").config();
import { NextFunction, Request, Response } from "express";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken, {
  lazyLoading: true,
});

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { phone_number } = req.body;
    try {
      await client.verify.v2
        ?.services(process.env.TWILIO_SERVICE_SID!)
        .verifications.create({
          channel: "sms",
          to: phone_number,
        });

      res.status(201).json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
};

//otp

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { phone_number, otp } = req.body;

    try {
      await client.verify.v2
        .services(process.env.TWILIO_SERVICE_SID!)
        .verificationChecks.create({
          to: phone_number,
          code: otp,
        });

      res.status(200).json({
        success: true,
        message: "OTP verified successfully!",
      });
      // is user exist
      // const isUserExist = await prisma.user.findUnique({
      //   where: {
      //     phone_number,
      //   },
      // });
      // if (isUserExist) {
      //   await sendToken(isUserExist, res);
      // } else {
      //   // create account
      //   // const user = await prisma.user.create({
      //   //   data: {
      //   //     phone_number: phone_number,
      //   //   },
      //   // });
      //   // res.status(200).json({
      //   //   success: true,
      //   //   message: "OTP verified successfully!",
      //   //   user: user,
      //   // });
      // }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
};

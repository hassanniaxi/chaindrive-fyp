import authRouter from "./auth";
import conversationRouter from "./conversation";
import dashboardRouter from "./dashboard";
import deviceRouter from "./device";
import listingRouter from "./listing";
import locationRouter from "./locations";
import messageRouter from "./message";
import notificationRouter from "./notification";
import otpRouter from "./otp";
import rentalRouter from "./rental";
import userRouter from "./user";
import violationRouter from "./violation";
import walletRouter from "./wallet";

const router = {
  auth: authRouter,
  user: userRouter,
  dashboard: dashboardRouter,
  wallet: walletRouter,
  conversation: conversationRouter,
  message: messageRouter,
  notification: notificationRouter,
  listing: listingRouter,
  rental: rentalRouter,
  violation: violationRouter,
  device: deviceRouter,
  location: locationRouter,
  otp: otpRouter,
};

export default router;

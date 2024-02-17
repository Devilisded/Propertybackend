import express from "express";
import {
  fetchLoginData,
  addUser,
  sendOtp,
  checkLogin,
  verifyEmail,
  verifyNumber,
  checkAdmin,
} from "../controllers/login.js";
const router = express.Router();

router.get("/fetchLoginData", fetchLoginData);
router.post("/addUser", addUser);
router.get("/sendOtp/:email", sendOtp);
router.post("/checkLogin", checkLogin);
router.get("/verifyEmail/:loginEmail", verifyEmail);
router.get("/verifyNumber/:loginNumber", verifyNumber);
router.post("/checkAdmin", checkAdmin);
export default router;

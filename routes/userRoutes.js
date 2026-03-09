const express = require("express");
const userController = require("../controllers/authController");
//const authController = require("../controllers/authController");
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.post("/forgetPassword", userController.signin);
router.patch("/resetPassword/:token", userController.signin);

router.use(userController.protect);
router.patch("/updateMyPassword", userController.updatePassword);

module.exports = router;

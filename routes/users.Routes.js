
const express = require('express');
const router = express.Router();
const {verifySignUp} = require("../middleware");
const indexCtrl = require("../controllers/index.Controller");


router.post("/signup", verifySignUp.checkDuplicateUsernameOrEmail, indexCtrl.usersCtrl.signUp);
router.post("/signin", indexCtrl.usersCtrl.signIn);



module.exports = router
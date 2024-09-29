const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignUp")
const userSignInController = require('../controller/userSignIn')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/userDetails')
const userLogout = require('../controller/userLogout')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-datails",authToken,userDetailsController)
router.get("/userLogout",userLogout)


module.exports = router
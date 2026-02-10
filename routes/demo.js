const express = require('express')
const {handleFunctionBFHL, handleFunctionHealth, handleFunctionLanding} = require("../controllers/demo")
const router = express.Router()

router.get("/", handleFunctionLanding)
router.post("/bfhl", handleFunctionBFHL)
router.get("/health", handleFunctionHealth)

module.exports = router
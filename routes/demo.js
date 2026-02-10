const express = require('express')
const {handleFunctionBFHL, handleFunctionHealth} = require("../controllers/demo")
const router = express.Router()

router.post("/bfhl", handleFunctionBFHL)
router.get("/health", handleFunctionHealth)

module.exports = router
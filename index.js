require("dotenv").config()
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 2911

const demoRoutes = require("./routes/demo")
app.use("/", demoRoutes)

app.listen(PORT , () => {
    console.log("Server Started at :" + PORT)
})

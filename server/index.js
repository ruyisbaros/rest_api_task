require("dotenv").config()
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express()

//Import Routes
const playerRouter = require("./routes/playersRoute")


//Required Middle wares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))



app.use("/api/v1/players", playerRouter)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}... `);
})
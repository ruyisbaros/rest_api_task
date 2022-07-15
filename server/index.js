require("dotenv").config()
const express = require('express');

const cors = require('cors')
const morgan = require('morgan')

const app = express()

//Required Middle wares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

const createCsvLogs = (arr) => {

}

app.get("/find_artist", async (req, res) => {
    try {

    } catch (error) {
        res.status(404).send(error.message)
    }

})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}... `);
})
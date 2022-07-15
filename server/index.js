require("dotenv").config()
const express = require('express');
const axios = require('axios')
const cors = require('cors')
const morgan = require('morgan')

const csvJson = require('csvjson')
const fs = require('fs')

const app = express()

//Required Middle wares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

const createCsvLogs = (arr) => {
    //console.log(arr);
    const c_data = arr.map(item => ({
        name: item.name, mbid: item.mbid, url: item.url, image_small: item.image[0]["#text"], image: [{ ...item.image }]
    }))

    const csv_data = csvJson.toCSV(c_data, {
        headers: 'key'
    })
    fs.writeFileSync('./user-supplied.csv', csv_data)
}

app.get("/find_artist", async (req, res) => {
    try {
        const { data } = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=aa&api_key=${process.env.API_KEY}&format=json`)
        if (data.results) {
            createCsvLogs(data.results.artistmatches.artist)
            res.status(200).send(data.results.artistmatches.artist)
        } else {
            res.send("No result")
        }
    } catch (error) {
        res.status(404).send(error.message)
    }

})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}... `);
})
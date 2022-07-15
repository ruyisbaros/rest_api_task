const axios = require('axios')
const asyncHandler = require("express-async-handler")
const { createCsvLogs } = require('../utils/cshHandler')

exports.findArtist = asyncHandler(async (req, res) => {
    const { data } = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=aa&api_key=${process.env.API_KEY}&format=json`)
    if (data.results) {
        createCsvLogs(data.results.artistmatches.artist)
        res.status(200).send(data.results.artistmatches.artist)
    } else {
        res.send("No result")
    }
})
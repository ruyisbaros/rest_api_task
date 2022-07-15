const router = require('express').Router()
const { findArtist } = require('../controllers/playerControllers')

router.get('/find_artist', findArtist)

module.exports = router;
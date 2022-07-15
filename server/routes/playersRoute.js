const router = require('express').Router()
const { findArtist } = require('../controllers/playerControllers')

router.post('/find_artist/', findArtist)

module.exports = router;
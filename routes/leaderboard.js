const express = require('express');
const router = express.Router();

const Leaderboard = require('../controllers/leaderboardController')

router.post('/', Leaderboard.postLeaderboard)
router.get('/all', Leaderboard.getAllLeaderboard)
router.get('/game/:id', Leaderboard.getLeaderboard)

module.exports = router;
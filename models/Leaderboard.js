var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const leaderboardModel = new Schema({
    name: {
        type: String,
        required: true
    },
    move: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    game: {
        type: String,
        required: true
    }
    
});


const Leaderboard = mongoose.model('Leaderboard', leaderboardModel)

module.exports = Leaderboard;
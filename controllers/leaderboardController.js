const leaderboardModel = require('../models/Leaderboard')


class Leaderboard {

    static postLeaderboard(req, res) {
        let leaderboard = new leaderboardModel({
            name: req.body.name,
            move: req.body.move,
            time: req.body.time,
            game: req.body.game
        });

        leaderboard.save()
            .then((leaderboardSaved) => {
                res.status(200).json({
                    leaderboard: leaderboardSaved
                })
            }).catch((err) => {
                res.status(500).send(err)
            })
    }

    static getAllLeaderboard(req, res) {
        leaderboardModel
            .find({})
            .limit(10)
            .exec()
            .then( data =>{
                let arrObj = [];

                data.forEach( item=>{
                    arrObj.push({
                        name: item.name,
                        move: item.move,
                        time: item.time,
                        game: item.game,
                    });
                });

                res.status(200).json({
                    leaderboard: arrObj
                })
            })
            .catch( err => {
                res.status(500).send(err)
            });
    }

    static getLeaderboard(req, res) {
        leaderboardModel
        .find({game : req.params.id})
        .limit(10)
        .exec()
        .then( data =>{
            let arrObj = [];

            data.forEach( item=>{
                arrObj.push({
                    name: item.name,
                    move: item.move,
                    time: item.time,
                    game: item.game,
                });
            });

            res.status(200).json({
                leaderboard: arrObj
            })
        })
        .catch( err => {
            res.status(500).send(err)
        });
    }

}

module.exports = Leaderboard;
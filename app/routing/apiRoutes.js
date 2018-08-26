var express = require('express');
var router = express.Router();
var friendsArray = require("../data/friends.js");

router.route('/api/friends')

    .get(function (req, res) {
        return res.json(friendsArray);
    })

    .post(function (req, res) {
        let newAddition = req.body;
        console.log(newAddition);

        var total2 = 100;
        var compatible = 0;

        for (var i = 0; i < friendsArray.length; i++) {
            var totalDifference = 0

            for (let x = 0; x < friendsArray[i].scores.length; x++) {
                totalDifference += Math.abs(parseInt(friendsArray[i].scores[x]) - parseInt(newAddition.scores[x]));
                console.log(i, totalDifference);
            };
            if (totalDifference < total2) {
                console.log(i, totalDifference, total2);
                total2 = totalDifference;
                compatible = i;
            };

        };

        console.log("compatible: " + compatible)
        console.log(friendsArray[compatible]);
        friendsArray.push(newAddition);
        res.json(friendsArray[compatible]);
    })

module.exports = router;
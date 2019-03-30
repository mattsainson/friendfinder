// ===============================================================================
// LOAD DATA
// ===============================================================================

var userDataObj = require("../data/friends.js");
var userData = userDataObj.userData;
var fs = require('fs');

// console.log('userData',userData); 

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.send({userData: userData}).end();
    });

    // API POST Requests
    // --------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        var newUser = req.body; //object
        // console.log('newUser',newUser);
        // -----------
        //figure out the best match

        //rules: lowestScore wins
        //set newUser.Id to userData.length
        //for each element in userData
        //for each element in userData.scores
        //clear totalScore = 0
        //abs of subtract userData.scores[i] from newUser.scores[i]; ex. abs(3-5)=2
        //add that number to totalScore
        //compare totalScore to lowestScore
        //if totalScore is lower than lowestScore, make lowestScore=totalScore and set lowestId to newUser.id
        //when done, push newUser into userData
        //get data from userData[lowestId]

        var lowestScore = 1000; //this is some number higher than any aggregated 
        var totalScore = 0;
        var lowestIdx = -1;
        userData.forEach(function (user,userIdx) {
            // console.log('user',user);
            totalScore = 0;
            user.scores.forEach(function (score,scoreIdx) {
                // console.log('score',score);
                totalScore += Math.abs(score - newUser.scores[scoreIdx]);
                // console.log('totalScore',totalScore);
            });
            if(totalScore < lowestScore) {
                lowestScore = totalScore;
                lowestIdx = userIdx;
            }
        });

        //now push newUser into the userData array, after we evaluated the current users
        userData.push(newUser);

        // -----------
        // send back the best match object
        // Note: I'm intercepting the photo because I have no control over what
        // is input by the user. So instead I'm randomly getting a photo that I know.
        var photo = '';
        var imgdir = __dirname+'/../public/assets/images/people/';
        // console.log(imgdir);
        fs.readdir(imgdir, function(err, images) {
            // console.log(images);
            photo = '/static/assets/images/people/'+images[Math.floor(Math.random()*images.length)];
            // console.log(photo);
            var data = {
                name: userData[lowestIdx].name,
                photo: photo
            };
            res.send(data).end();
        });
    });
};

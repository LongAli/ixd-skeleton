/*
 * delete an activity on the home page.
 */

var data = require('../actLog.json');
var activities = require('../activites.json');
////var savedId = [];

//localStorage.setItem("names", JSON.stringify(names));

//...
//var storedNames = JSON.parse(localStorage.getItem("completedID"));


//request.query['activity_index']

function filterID(ele) {
   var searchCompleted = activities.activites.filter((a) => a.ID == ele);
   return searchCompleted;
}

exports.deleteActivity = function(request, response) {
   const currentIDs = request.query.saveIDarr;
console.log(currentIDs)
   console.log("starting to add friends")

   var newActivity;
   if (request.query['activity_index']) {
       newActivity = search(request.query['activity_index']);
       data.toLog.unshift(newActivity[0]);
   }
   response.render('index', data);
}


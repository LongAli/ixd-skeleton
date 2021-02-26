
/*
 * Filtered activity.
1 - <=10/ 2 - <=20/ 3 - <=30/ 4 - <=60 / 5 - >60/ 6 - no pre
2nd
"a" -Exercise
"b" -Music
"c" -Creative
"d" -Productivity
"e" -Art
"f" -Nature
"g" -Cooking
"h" -Relaxation
"i" -Learning
3st
in 
out
no
Category
minTime
Tags
*/


var activities = require("../activites.json");

function filterByTime(time) {
  const results = activities.activites.filter(
    element => element.minTime <= time
  );
  return results;
}


/*
function filterByCategory(category) {

    const results = activities.activites.filter(
        element2 => element2.Category == "a"
        "Exercise"
      );
    for (var i = 0; i < category.length; i++){
        if (category[i] == 
    }
    
    
    return results;
  }*/

exports.view = function(request, response) {
  if (request.query["time"]) {
    results = { activites: filterByTime(request.query["time"]) };
  } else {
    results = activities;
  }

  const randomElement = activities[Math.floor(Math.random()* activities.length)];
  response.render("filtered", randomElement);

};

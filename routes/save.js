/*
 * save an activity to the home page.
 */

 var data = require('../actLog.json');
 var activities = require('../activites.json');

 function search(ele) {
	var searchCompleted = activities.activites.filter((a) => a.ID <= ele);
	return searchCompleted;
}

 exports.saveActivity = function(request, response) {
    console.log("starting to add friends")
        const activity = request.query.Activity;
        const time = request.query.minTime;
        const description = request.query.Description;
        const image = request.query.Image;
        const assignedID = request.query.id;
        var idNumber = Object.keys(data).length;
    // console.log(idNumber);
    // console.log("jj");

    if (request.query['activity_index']) {
		results = { activites: search(request.query['activity_index']) };
	} else {
		results = activities;
    }

    console.log(results);

    //data[assignedID] = idNumber;
    const newActivity = {
        "ID": completedID,
        "Activity": activity,
        "minTime": time,
        "Description": description,
        "Image": image,
    };
    console.log(newActivity)
    data.toLog.push(newActivity);
    response.render('index', data);
 }

 
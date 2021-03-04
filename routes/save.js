/*
 * save an activity to the home page.
 */

 var data = require('../actLog.json');
 var activities = require('../activites.json');
 //const fs = require("fs"); 

 function search(ele) {
	var searchCompleted = activities.activites.filter((a) => a.ID == ele);
	return searchCompleted;
}

 exports.saveActivity = function(request, response) {
    console.log("starting to add friends")



    var newActivity;
    if (request.query['activity_index']) {
        newActivity = search(request.query['activity_index']);
        data.toLog.unshift(newActivity[0]);
	}

    //console.log(newActivity);
    //var objLength = Object.keys(activities).length;
   
    
    //console.log("jj");
    //console.log(data);
    // const assignedID = request.newActivity.ID;
    // const activity = request.query.Activity;
    // const time = request.query.minTime;
    // const description = request.query.Description;
    // const image = request.query.Image;

    // console.log(assignedID);

    // //data[assignedID] = idNumber;
    // const newAc = {
    //     "ID": assignedID,
    //     "Activity": activity,
    //     "minTime": time,
    //     "Description": description,
    //     "Image": image,
    // };
    //data.toLog.push(newActivity);
    //var logList = data.toLog.length;
    //console.log(logList);
    //data[] = logList + 1;
    // fs.writeFile("data.json", JSON.stringify(data), err => { 
     
    //      // Checking for errors 
    //      if (err) throw err;  
       
    //     console.log("Done writing"); // Success 
    //  }); 
    response.render('index', data);
 }

 
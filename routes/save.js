/*
 * save an activity to the home page.
 */

var data = require('../actLog.json');

exports.saveActivity = function(request, response) {
	console.log('starting to add friends');
	//   const activity = request.query.Activity;
	//   const time = request.query.minTime;
	//   const description = request.query.Description;
	//   const image = request.query.Image;
	//   var assignedID = "ID";
	//   var idNumber = Object.keys(data).length;
	//   console.log(idNumber);
	//   console.log("jj");

	// //obj[newNum] = newVal;
	//   //add projectID
	//   const newActivity = {
	//       "Activity": activity,
	//       "minTime": time,
	//       "Description": description,
	//       "Image": image,
	//   };
	//   //console.log(newActivity)
	//   data.toLog.push(newActivity);
	response.render('index', data);
};

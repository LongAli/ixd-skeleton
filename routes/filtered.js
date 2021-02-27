/*
 * Search in database based on filter function.
 first filter:
 1- <= 10
 2 - <= 20
 3 - <= 30
 4 - <= 1
 5 - > 60
 6 - no pre
 var activity_pool = require('../activities.json');
 */
var activities = require('../activites.json');

// const tryAgainBtn = document.querySelector('.tryAgain');

// tryAgainBtn.addEventListener('click', randomize);

function filterByTime(time) {
	const results = activities.activites.filter((element) => element.minTime <= time);
	return results;
}

exports.view = function(request, response) {
	if (request.query['time']) {
		results = { activites: filterByTime(request.query['time']) };
	} else {
		results = activities;
	}

	const e = randomize(results);
	response.render('filtered', e);
};

function randomize(ele) {
	const seed = Math.floor(Math.random() * 10 * Object.keys(ele).length);
	const randomElement = ele.activites[parseInt(seed)];
	//console.log(randomElement);
	return randomElement;
}
/*
function(){
    $(".filter_button").click(function(){
         do the function here
	});
}


.filter('favoriteFilter', ['$localStorage', function (localStorage) {

        if(localStorage.getItem('favorites')!=undefined)
        {
            var out = [];
            return out;
        }
        else
        {
            return function (dishes) {
                var old_favorite = JSON.parse($localStorage.get('favorites'));
                var leng = Object.keys(old_favorite).length;
                console.log(leng);

                var out = [];
                for (var i = 0; i < leng; i++) {
                    for (var j = 0; j < dishes.length; j++) {
                        if (dishes[j].id === favorites[i].id)
                            out.push(dishes[j]);
                    }
                }
                return out;
            }
        };
}]);*/

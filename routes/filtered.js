
/*
 * Search in database based on filter function.
1st
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
var activities = require('../activites.json');



exports.view = function(request, response){
    response.render('filtered', activities);
    console.log(activities.activites[0].minTime);
};

exports.filteredInfo = function(request, response){
    
    var time = request.params.minTime;
    var category = request.params.Category;
    var tag = request.params.Tags;
    
};

//time filter
// var newArray = activites.filter(function(selectTime){
//     for (var i =0; i < Object.keys(activities.activites[i]).length; i++){
//         if (activities.activites[i].minTime <= selectTime){

//         }
//     }
    
//});

//category filter
function filterByCategory(selectCategory){
    if (selectPool1 != null && selectTime >= time){
        selectPool1
    }
}

//tag filter
function filterByTag(selectTag){
    if (selectPool1 != null && selectTime >= time){
        selectPool1
    }
}

  
// function callBack(){

// }
//   activities
// function(){
//     $(".filter_button").click(function(){
//          do the function here
// 	});
// }




/*
var old_favorite = JSON.parse($localStorage.get('favorites'));
localStorage()

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
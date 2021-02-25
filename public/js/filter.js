var activities = require('../activites.json');
var selectTime =  window.localStorage.getItem('currentId');
var selectCategory =   window.localStorage.getItem('selectedCategory');
var selectTag =   window.localStorage.getItem('currentSelect');
function filterByTime(time){
    const results = activities.activites.filter(element => element.minTime <= time);
    return results
}

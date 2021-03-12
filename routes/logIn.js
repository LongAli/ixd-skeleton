/*
 * GET log-in.
 */

exports.view = function(request, response){
    console.log("log-in rendered");
    response.render('logIn', {
      'logIn': [
          {   'name': 'Waiting in Line',
              'image': 'lorempixel.people.1.jpeg',
              'id': 'project1'
          },
          
          { 	'name': 'Needfinding',
              'image': 'lorempixel.city.1.jpeg',
              'id': 'project2'
          },
      ]
    });
  };
  
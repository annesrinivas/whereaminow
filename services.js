//Services
twitterApp.service ('cityService', ['$rootScope', function($rootScope){
   this.city= "New York, NY";
   this.lat= '40.748701';
   this.lon= '-73.985664';
    
}]);


//Factory Service
twitterApp.factory('twitterApi', ['$resource',
 function($resource) {
  return {
    Authors: $resource('http://127.0.0.1:3000/api/author/:id', {id: '@id'}),
    Place:  $resource('http://127.0.0.1:3000/api/place/:lat/:lon/:dist', {lat: '@lat',lon: '@lon', dist: '@dist' }),
  };
}]);


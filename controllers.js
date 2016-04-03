//Controllers
twitterApp.controller('homeController',['$scope', 'cityService',function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.lat = cityService.lat;
    
    $scope.lon = cityService.lon;
    
    $scope.$watch('lat', function(){
        cityService.lat = $scope.lat;
    })
    
    $scope.$watch('lon', function(){
        cityService.lon = $scope.lon;
    })
  
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
    
    
     if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
                                $scope.position = position;
                                $scope.lon = position.coords.longitude;
                                $scope.lat = position.coords.latitude;
                                console.log ('User location is lon:' +  $scope.lon + 'lat: ' + $scope.lat )
      });
    });
  }

    
}]);



twitterApp.controller('localForecastController',['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.lat = cityService.lat;
    
    $scope.lon = cityService.lon;
        
    $scope.days = $routeParams.days || '2';
    
    console.log ('in localForecastController');
    
    console.log('Getting weather for'+ $scope.lat + $scope.lon );
    
    $scope.weatherAPI = $resource ("http://api.openweathermap.org/data/2.5/forecast",{
        callback :"JSON_CALLBACK"}, {get:{method:"JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get ({lat: $scope.lat, lon: $scope.lon, appid:'bfbc1f2b74dacf6c5c73d70b7a7b5fa8', cnt: $scope.days});
    
    
    console.log($scope.weatherResult);
    
    $scope.convertToFahrenheit = function (degK){
        
        return Math.round ( (1.8 * (degK - 273)) + 32);
    }
  
    $scope.convertToDate = function (dt){
        
        return new Date (dt * 1000);
    }
  
    
}]);



twitterApp.controller('twitterController',['$scope', '$resource', '$routeParams','$http', 'twitterApi','cityService', function($scope, $resource, $routeParams, $http, twitterApi , cityService) {
    
     $scope.loading = true;

     $scope.lat = cityService.lat;
    
     $scope.lon = cityService.lon;
    
     $scope.dist = $routeParams.dist || '9000';
    
     console.log('inside twitter controller' + $scope.lat + $scope.lon );
    
//   $scope.twitterResults = twitterApi.Authors.query({id: 'Reality Check'});
    
     $scope.twitterResults = twitterApi.Place.query({lat: $scope.lat,lon: $scope.lon, dist: $scope.dist }, function (data){
         
      $scope.loading = false; 
         
     });
    
}]);


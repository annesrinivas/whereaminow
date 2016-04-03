//Routes
twitterApp.config(function ($routeProvider) {
    
    $routeProvider
 
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
 
    .when('/forecastlocal', {
        templateUrl: 'pages/forecast.htm',
        controller: 'localForecastController'
    })
    
    .when('/forecastlocal/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'localForecastController'
    })

    .when('/twitter', {
        templateUrl: 'pages/twitter.htm',
        controller: 'twitterController'
    }) 
    .when('/twitter/:lon/:lat/:dist', {
        templateUrl: 'pages/twitter.htm',
        controller: 'twitterController'
    })
   .otherwise({redirectTo:'/'});
    
});

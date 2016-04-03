//Declare module
var twitterApp = angular.module('twitterApp', ['ngRoute', 'ngResource','angular-loading-bar', 'ngAnimate']);


//Directives

twitterApp.directive("weatherReport", function(){
   return{
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope : {
            weatherDay: "=",              //Object
            convertToStandard: "&",       //Function
            convertToDate: "&",
            dateFormat:"@"               //String 
       
    }
   } 
})

twitterApp.directive("twitterResult", function(){
   return{
       restrict: 'E',
       templateUrl: 'directives/twtitterRecent.html',
       replace: true,
       scope : {
            weatherDay: "=",              //Object
            convertToStandard: "&",       //Function
            convertToDate: "&",
            dateFormat:"@"               //String 
       
    }
   } 
})

// Setup the filters

twitterApp.filter('hasHashtag', function() {

  return function(tweet) {
    
   var regexp = /\B\#\w\w+\b/g
    result = tweet.match(regexp);
    if (result) {
        return true;
    } else {
        return false;
    };
    
}});

twitterApp.filter('hasMention', function() {

  return function(tweet) {
    
   var regexp = /\B\@\w\w+\b/g
    result = tweet.match(regexp);
    if (result) {
        return true;
    } else {
        return false;
    };
    
}});
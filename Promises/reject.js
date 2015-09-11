var q = require('q'),
    defer = q.defer();    // promise created

defer.promise.then(null,  function(err){
      console.log(err);
});
setTimeout(defer.reject, 300, "REJECTED!");

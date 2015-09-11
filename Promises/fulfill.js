var q = require('q');
    defer = q.defer();    // promise created

defer.promise.then(console.log);
setTimeout(defer.resolve, 300, "RESOLVED!");

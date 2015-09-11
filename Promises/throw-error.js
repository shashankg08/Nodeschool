var q = require('q'),
    json = process.argv[2];

function parsePromised (data) {
    var defer = q.defer(),
        result;

    try{
        result = JSON.parse(data);
    } catch(error){
        defer.reject(error);
    }
    defer.resolve(result);
    return defer.promise;
}

parsePromised(json).then(null, console.log);

var q = require('q'),
    defer = q.defer();

function attachTitle (data) {
    return "DR. "+data;
};

defer.promise.then(attachTitle).then(console.log);
defer.resolve('MANHATTAN');

// Promises always wraps values into
// promises and returns it.

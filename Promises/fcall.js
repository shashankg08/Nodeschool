var q = require('q'),
    json = process.argv[2];

q.fcall(JSON.parse, json).then(null, console.log);

// makes a function call and returns a promise which
// has value / error wrapped in it (inside promise);

var Firebase = require('firebase');
var firebaseRef = new Firebase('https://birdlist.firebaseio.com/');
var ebird = require('ebird-js');

firebaseRef.authWithCustomToken(process.env.firebase).then(() => {
    return ebird.ref.taxa();
}).then(results => {
    var ps = results.map(species => {
        return firebaseRef.child('birds').child(species.speciesCode).set(species);
    });
    return Promise.all(ps);
}).then(() => {
    console.log('Saved all birds');
    process.exit(0);
}).catch(e => {
    console.log(e);
    process.exit(1);
});

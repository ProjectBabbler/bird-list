var Firebase = require('firebase');
var firebaseRef = new Firebase('https://birdlist.firebaseio.com/');

module.exports = {
    getBySpeciesCode(code) {
        firebaseRef.child('birds').orderByChild('speciesCode').equalTo(code).once('value').then(snap => {
            return snap.val();
        });
    }
};
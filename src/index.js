var Firebase = require('firebase');
var firebaseRef = new Firebase('https://birdlist.firebaseio.com/');

module.exports = {
    getBySpeciesCode(code) {
        return firebaseRef.child('birds').orderByChild('speciesCode').equalTo(code).once('value').then(snap => {
            var data = snap.val();
            if (data) {
                return data[code];
            } else {
                return null;
            }
        });
    }
};
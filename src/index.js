var firebase = require('firebase');
var config = {
    apiKey: 'AIzaSyC8uCPB9XFgxyPDyEMHSs3jJXLOAeigzj0',
    databaseURL: 'https://birdlist.firebaseio.com',
};
let firebaseApp = firebase.initializeApp(config, 'bird-list');

module.exports = {
    getBySpeciesCode(code) {
        return firebaseApp.database().ref('birds').orderByChild('speciesCode').equalTo(code).once('value').then(snap => {
            var data = snap.val();
            if (data) {
                return data[code];
            } else {
                return null;
            }
        });
    }
};
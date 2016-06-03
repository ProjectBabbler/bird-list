var firebase = require('firebase');
var config = {
    apiKey: 'AIzaSyC8uCPB9XFgxyPDyEMHSs3jJXLOAeigzj0',
    databaseURL: 'https://birdlist.firebaseio.com',
    serviceAccount: {
        project_id: 'project-3189009344311462796',
        private_key: process.env.FIREBASE_SERVICE_KEY.replace(/\\n/g, '\n'),
        client_email: 'private-console-key@project-3189009344311462796.iam.gserviceaccount.com',
    }
};
let firebaseApp = firebase.initializeApp(config);
var ebird = require('ebird-js');

ebird.ref.taxa().then(results => {
    var ps = results.map(species => {
        return firebaseApp.database().ref('birds').child(species.speciesCode).set(species);
    });
    return Promise.all(ps);
}).then(() => {
    console.log('Saved all birds');
    process.exit(0);
}).catch(e => {
    console.log(e);
    process.exit(1);
});

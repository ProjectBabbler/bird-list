var firebase = require('firebase');
var config = {
    apiKey: 'AIzaSyC8uCPB9XFgxyPDyEMHSs3jJXLOAeigzj0',
    databaseURL: 'https://birdlist.firebaseio.com',
    serviceAccount: {
        project_id: 'project-3189009344311462796',
        // This key only has read permissions.
        private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjknblR8+4EEoG\nmcHhjz9iEsubzTpwzz2JSyp9w/NpqByhNkhFsxeBKZhkwge6K4/E6U+QeQeHdNh8\nrcpRDOuaiIzV1GVQh/LLQrchCDFhZdbmaA9ESTT9gkkhc50BDoF/vuI7jvbbLS/I\nmQnmRan7s1KF7ZOsxTd2z66VxBRahfjqRX/B0hXJY/4aCd0lE4TyP5KSwwNb3sRc\nOXeGvPbi19WjeCnSNHzH2tWVPUjucSx0q/i/H2CPHEYOTvJnaDF0zKukYoUHxfae\nWDAIELHGrY8+48yAa3kisOo9ePcJujJzmAyFV3fZniItoJqj6dwhMFkGvvuYT6ve\nKKwsMiX9AgMBAAECggEAGgO2Qxrbr2Nv0oLrsertYrSoizvlmoFrQQWiWWQrt1cU\nTpNqhSNJjrJF2Wh+gB5jfCa7D7gf+Wwc7h9ZuPA8HFSxSWTBRECK3cbbhzZdXCct\nOXG9U9fsxJDO/rH7e2qKL/30zxIaspsKKXYle+kCctR/QGube/PVsWCwXINV1VuN\nmtTrODbUeDRlmMtvNG2KShzuIhMWsDUXcCpCUKpSyVlI9orX1tyCqsQgV84rC/BH\n2HM9nsCwnHAAC23xEXsRb4sLHgJOyJ7AZvytcQlXTdOvzcJbRaazEVS5UEIABmBh\n5QklhNh0YDMW9xrijLcHnDocORUd9c88qWS34JmGRQKBgQDqnTYKJUMv+8nNkKnS\nzBoZCMEa9KlJosq+Gi2ihLY7j0m03YmeTba6/ThAYhyEP+T64NQnOp6yWsNlZeeO\nnSj+XNNeLd77e63eT0gYKLcggAjPgfZSaDPNCvhpCXy15ibayoqeFHSahamRJT87\nmT6BwcTay9wDIcX6sj6XKePcSwKBgQCye3fLJ4xNTXhyk53JdenbVGDdeOKRMJ9R\np3dfiMCsJ9v6nAkPwvdL9x7JEwnn03q8bYaRldXM2oMo7jTt3KoRHFV9Feeaqwcl\ns3dvibX1NfeBGKjHY1m4hRJbmbvyVnsLfHkeOYa0vKwbeos7Vvdi1woGEpLTpdZv\nD+4UMNCJ1wKBgAo5X6mBhjQJHPpAW6Y8DscYgpHSJ6510bAHJAX5Epf13phrLxwe\n9t+fOVxU6jk5L5lfQt+SxmevXOSGVFj6sFalZPCtvxHmieUuP04OOCzKZ5fjagCd\nWeSNndW1/CFRLlBKk0/gRFSXjpQss1y9iOPOte1zBNt+FUqfieq8gJmRAoGAW2si\nUMxQ8MddilJR336l6dGuS8I/Sl69O/WrDyPcjFFeO17wxUH3qNFK03MM/9EybJEs\n/CTi/apuw+g+9BayhVEd+JPfrTks0AK8ikTfDlo2C8m1qWsZ6Yk/feugeOAS5i87\nWl/cv3ZkMS7zYdGJpPbAC5w32HB5BSoDqBPYvMECgYEA4/NJ5AU+4tSe+NXD/iFw\nNaligaFvUZjkxTyOBE0AraoNTOnDKSKYflET6mirGTmTHYyfzEqB91h8S6ULd/fO\n4YGbMFZ41HcYUsPUENexH1qm11DPNA7h1v+pohDJK3LYBHefKJ70+vL72x80Daxp\nwuyuCGPa8TRvx2HflFPAnc8=\n-----END PRIVATE KEY-----\n',
        client_email: 'public-read-only@project-3189009344311462796.iam.gserviceaccount.com',
    }
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
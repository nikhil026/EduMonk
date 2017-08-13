// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '772186582987973', // your App ID
        'clientSecret'    : 'bb6d832834e87a4296d186c5c58bc62b', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email,photos'

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '842917659340-9m8bamcnndgdru6s1h610fp22ucki1un.apps.googleusercontent.com',
        'clientSecret'     : 'QTQ5ADogIisOMi4-uYX2mdqU',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};

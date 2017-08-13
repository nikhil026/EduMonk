module.exports = function(router, passport) {

  router.get('/', function(req, res) {
        res.render('index.ejs');
    });

    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    router.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        router.post('/login', passport.authenticate('login', {
            successRedirect : '/profile',
            failureRedirect : '/login',
            failureFlash : true
        }));


        router.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        router.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile',
            failureRedirect : '/signup',
            failureFlash : true
        }));


        router.get('/facebook', passport.authenticate("facebook", { scope : ["email", "publish_stream", "user_location", "user_hometown", "user_birthday", "read_friendlists"]}));

        router.get('/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


        router.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        router.get('/google/callback',
            passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


        router.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        router.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile',
            failureRedirect : '/connect/local',
            failureFlash : true
        }));


        router.get('/connect/facebook', passport.authorize('facebook', { scope : ['email'] }));

        router.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

      router.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));
      router.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    router.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


    router.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });



    router.get('/unlink/google', isLoggedIn, function(req, res) {
        var user  = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/');
    }

};

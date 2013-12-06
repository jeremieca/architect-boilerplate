module.exports = function setup(options, imports, register) {
	
	var passport 			= require('passport');
	var express				= require('express');
	var FacebookStrategy 	= require('passport-facebook').Strategy;;

	var app					= imports.app;
	var mongoose			= imports.mongoose;

	var providers			= options.providers;
	var session 			= options.express.session;

	passportInitialize			(app, passport, express, session);
	passportImplementInterfaces	(passport, mongoose);
	passportAddFacebookStrategy	(passport, app, mongoose, FacebookStrategy, providers);

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	app.get('/ok', function (req, res) {
		res.send("Authentified :" + req.user);
	});

	register(null, {
		auth: {
			getCurrentUser: function (req) {
				if(req && req.user) {
					return req.user;
				}
				return null;
			}
		}
	});

}

// Initialize passport parameters
function passportInitialize (app, passport, express, session) {

	app.middleware(express.session(session));
	app.middleware(passport.initialize());
	app.middleware(passport.session());

}


// Implementation of specifics passport interfaces
function passportImplementInterfaces (passport, mongoose) {

	passport.serializeUser(function(user, done) {

		done(null, user.id);
	
	});

	passport.deserializeUser(function(id, done) {

		mongoose.User.findById(id, done);

	});

}

// Define configuration of Facebook strategy for Facebook
function passportAddFacebookStrategy (passport, app, mongoose, FacebookStrategy, providers) {

	passport.use(new FacebookStrategy(providers.facebook, function (accessToken, refreshToken, profile, done) {

		mongoose.User.getUserByFacebookId(profile, done);

	}));

	app.get('/auth/facebook', passport.authenticate('facebook'));

	app.get('/auth/facebook/callback', passport.authenticate('facebook',
		{ successRedirect: '/ok', failureRedirect: '/fail' }
	));

}

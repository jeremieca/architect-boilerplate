function loadModel(mongoose) {

    var UserSchema = new mongoose.Schema({

        name: String,
        email: String,
        username: {
            type: String,
            unique: true
        },
        roles: [String],
        provider: String,
        hashed_password: String,
        salt: String,
        facebook: {},
        twitter: {},
        github: {},
        google: {}
        
    });

    UserSchema.methods.getOwnerIdentifier  = getOwnerIdentifier;
    UserSchema.statics.getUserByFacebookId = getUserByFacebookId;

    return { name: 'User', schema: UserSchema };

}

// Get User with facebook id or create if it doesn't exist
function getUserByFacebookId (profile, done) {
    
    User = this;

    User.findOne({ 'facebook.id': profile.id },

        function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                user = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    username: profile.username,
                    provider: 'facebook',
                    facebook: profile._json
                });
                user.save(function(err) {
                    if (err) console.log(err);
                    return done(err, user);
                });
            } else {
                // TODO : Compare user and profile to update if necessary
                return done(err, user);
            }
        }

    );

}

function getOwnerIdentifier () {

    return this.username;

}

module.exports = loadModel;

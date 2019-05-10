const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../models/userModel');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    try {

        const user = UserModel.create({ email, password });

        return done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.use('login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    console.log('recieved email', email, 'recevedpassword,', password)
    UserModel.findOne({
        email
    }).then(user => {

        if (!user) {
            return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        let isMatch = bcrypt.compareSync(password, user.password);

        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Password incorrect' });
        }

    });
}));


passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: 'top_secret',
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
        //jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()

}, async(token, done) => {
    try {
        //Pass the user details to the next middleware
        return done(null, token.user);
    } catch (error) {
        done(error);
    }
}));



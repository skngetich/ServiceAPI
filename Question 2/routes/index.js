var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    api:{
      ave_car_details:"/api/carmodel/create",
      Get_car_by_color_or_Model:'/api/carmodel/create',
      update_car_model_
    }
  });
});

router.post('/signup', passport.authenticate('signup', { session: false }), (req, res, next) => {
  res.json({
      message: 'Signup successful',
      user: req.user
  });
});

router.post('/login', (req, res, next) => {

  passport.authenticate('login', (err, user, info) => {

      try {
          if (err || !user) {
              const error = new Error('An Error occured')

              return next(error);
          }
          req.login(user, { session: false }, (error) => {
              if (error) return next(error)
                  //We don't want to store the sensitive information such as the
                  //user password in the token so we pick only the email and id
              const body = { _id: user._id, email: user.email };
              //Sign the JWT token and populate the payload with the user email and id
              const token = jwt.sign({ user: body }, 'top_secret');
              //Send back the token to the user
              return res.json({
                  user: {
                      id: user._id,
                      email: user.email
                  },
                  token
              });
          });
      } catch (error) {
          return next(error);
      }
  })(req, res, next);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var service = require('../service/service')
const { check, validationResult } = require('express-validator/check');


/* GET users listing. */
router.post('/carModel/create',
[
  check('carMaker').not().isEmpty(),
  check('color').not().contains('blue','red', 'white', 'yellow','green'),
  check('color').not().isEmpty(),
  check('registrationNumber').not().isEmpty(),
  check('yearOfManufuctring').isLength({max:4}),
  check('type').not().isEmpty().isLength({ min: 3 }),
  check('availability').not().isEmpty().isBoolean()
  

],
(req, res,next)=> {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

next()
}
,service.setCarDetails,function(req, res, next) {
  // service.setCarDetails
  const {message} = res.locals;
  res.json({message});
});

router.get('/carmodel',
[
  check('color').not().isEmpty(),
  check('color').contains('blue','yellow'),
  check('registrationNumber').not().isEmpty(),
  check('yearOfManufuctring').isLength({max:4}),
  check('type').not().isEmpty().isLength({ min: 3 }),
  check('availability').not().isEmpty().isBoolean()
  

],
(req, res,next)=> {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

next()
},service.getCarModel,function(req, res, next) {
  
});
router.get('/carmodel/blue',service.getblueCarModel,function(req, res, next) {
  
});
router.get('/carmodel/update',service.updateCarModel,function(req, res, next) {
  
});
router.get('/carmodel/deleteUnavailable',service.softDeleteUnavailable,function(req, res, next) {
  
});

module.exports = router;

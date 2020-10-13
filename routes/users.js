const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { check, validationResult } = require('express-validator');


//@route    POST  api/users
//des       register n user
//access    public
router.post('/',[
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please input Proper email').not().isEmpty(),
  check('password', 'Password too weak.Please select a password with 6 or more character.').isLength({ min:6 })
], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Passed');
});

module.exports = router;
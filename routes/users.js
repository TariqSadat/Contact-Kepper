const express = require('express');

const router = express.Router();

//@route    POST  api/users
//des       register n user
//access    public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
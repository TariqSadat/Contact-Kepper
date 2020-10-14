const express = require('express');
const router = express.Router();

const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/contact');

//@route    GET  api/contacts
//desc       get all users contacts
//access    private
router.get('/', auth, async (req,res)=>{
    try {
        const contacts = await Contact.find({ user : req.user.id }).sort({date: -1 });
        res.json(contacts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

//@route    Post  api/contacts
//desc       add new contacts
//access    private
router.post('/', [auth, [ check('name', 'name is required').not().isEmpty()]],async (req, res) => {
    const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, type } = req.body;
  try{
    const newContact = new Contact({
    name,
    email,
    phone,
    type,
    user: req.user.id
  });

  const contact  = await newContact.save();

  res.json(contact);
  }catch(error){
    console.error(error.message);
    return res.status(500).send('Server error');
  }
});

//@route    PUT  api/contacts/:id
//desc       update contact
//access    private
router.put('/:id', (req, res) => {
    res.send('update contact');
});

//@route    DELETE api/contacts/:id
//desc      delete contact
//access    private
router.delete('/:id', (req, res) => {
    res.send('delete contact');
});

module.exports =router;
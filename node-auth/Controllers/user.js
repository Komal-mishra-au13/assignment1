const express = require('express');
const router = express.Router();
const path = require("path");
const config = require('../config/config');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const layout = path.join('layouts', 'index');


router.get('/signup', (req, res) => {

    res.render('signup', { title: "Signup", layout });

});

// -------------------User SIGNUP Page- POST------------------ //
router.post('/signup',

    [
        check('firstName', 'Please enter the first name.').not().isEmpty(),
        check('email', 'Please enter email').isEmail(),
        check('password', 'Please enter the password.').isLength({ min: 6 }) 
    ],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('signup', {
                data: {},
                errors: errors.array(),
                message: 'Unable to create user!'
            });
        };

        try {

            let user = await User.findOne({ email: req.body.email });

            if (user) {
                data = {
                    title: "Signup",
                    layout,
                    error: "Email already registered! Please Login..."
                };
                res.render('signup', data);
            };

            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                role: req.body.role
            });

            user.password = bcrypt.hashSync(req.body.password, 9);

            await user.save();

            res.redirect('/auth/login');

        } catch (error) {
            console.log(error.message);
            res.status(500).render('signup', { title: "Signup", layout, err: "Error while Registering the account" });
        };
    });


    module.exports = router;
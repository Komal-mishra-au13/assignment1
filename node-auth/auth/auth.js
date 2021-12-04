const jwt = require('jsonwebtoken');
const config = require('../config/config');
const path = require('path')
const layout = path.join('layouts', "index");
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const auth = function (req, res, next) {

    // if (!req.cookies['token'] || req.cookies['token'] == "") {
    //     data = { msg: "Please login to access profile page!" }
    //     return res.render('login', { data, layout });
    // }
    if (!req.cookies['token'] ) {
        data = { msg: "Please login to access the profile page!" }
        return res.render('login', { data, layout });
    }

    else if (req.cookies['token']) {
        const decoded = jwt.verify(req.cookies['token'], config.secret);
        // console.log(decoded);
        req.user = decoded;
        console.log("DECODED FROM AUTH:",decoded)
        // console.log("loggedUsers from AUTH", loggedUsers);
 

    }
    next();

};

module.exports = auth;
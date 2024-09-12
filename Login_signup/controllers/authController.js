const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const emailService = require('../services/emailService.js');

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.postSignup = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const {uniqueId} = await User.create(name, email, hashedPassword);
        await emailService.sendUniqueId(email, uniqueId);
        res.redirect('/auth/login');
        console.log("User signed up and email sent");
    } catch(err) {
        res.status(500).send(err.message);
    }
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { name, uniqueId, password } = req.body;
    try {
        const user = await User.findByCredentials(name, uniqueId);
        console.log('User found:', user);

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            console.log('Password match:', isMatch);

            if (isMatch) {
                res.redirect('/auth/home');
                console.log("User logged in");
            } else {
                res.status(401).send('Invalid credentials');
                console.log("Invalid password");
            }
        } else {
            res.status(401).send('Invalid credentials');
            console.log("User not found");
        }
    } catch(err) {
        console.error('Login error:', err);
        res.status(500).send(err.message);
    }
};


exports.getHome = (req, res) => {
    res.render('home');
};

const nodemailer = require('nodemailer');
const config = require('../config.js');

const transporter = nodemailer.createTransport(config.email);

exports.sendUniqueId = (email, uniqueId) => {
    const mailOptions = {
        from: config.email.auth.user,
        to: email,
        subject: 'Your Unique ID for Login',
        text: `Your unique ID is: ${uniqueId}. Please use this ID along with your username and password to log in.`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
                reject(error);
            } else {a
                console.log('Email sent:', info.response);
                resolve(info);
            }
        });
    });
};

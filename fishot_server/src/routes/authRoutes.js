const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { body, validationResult } = require('express-validator')
const verifyToken = require('../middleware/authMiddleware')
const passport = require('passport')

  router.post('/api/register',authController.registerUser)
  router.post('/api/login',authController.login)
  router.post('/api/forgotPassword', authController.forgotPassword)
  // router.post('/reset-password', authController.resetPassword)

// Google Authentication
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
// router.use('/auth/google/data', passport.authenticate('google', { failureRedirect: '/login' }), (req,res)=>{
//   console.log('Incorming data from google auth api')
//   console.log(req.user)
//   res.redirect('/waiting-later')
// })

// // Twitter Authentication
// router.get('/twitter', passport.authenticate('twitter'))
// router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), authController.socialAuthCallback)

// // LinkedIn Authentication
// router.get('/linkedin', passport.authenticate('linkedin', { scope: ['r_emailaddress', 'r_liteprofile'] }))
// router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), authController.socialAuthCallback)

module.exports = router

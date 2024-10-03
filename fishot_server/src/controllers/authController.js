const authService = require('../services/authService')
const isAnyEmpty = require('./utils/empty-fields')
const clientsModel = require('../models/authModel')
const jwtUtils = require('../utils/jwtUtils')
const isEmailValid = require('../services/utils/isemailValid')
exports.registerUser = async (req, res) => {
  try {

    const { firstname, lastname, email, password, reEmail, confirmPassword } = req.body

    const emptyFields = await isAnyEmpty(firstname, lastname, email, password, reEmail, confirmPassword)

    if (emptyFields === true) return res.status(200).json({
      status: false,
      message: 'Please fill all required fields'
    })

    if (reEmail !== email) return res.status(200).json({
      status: false,
      message: 'Emails not match'
    })

    if(await !isEmailValid(email)) return res.status(200).json({
      status: false,
      message: 'Invalid Email!'
    })

    if (password !== confirmPassword) return res.status(200).json({
      status: false,
      message: 'Passwords not match'
    })

    const isUserExists = await clientsModel.findOne({
      where: {
        email: email
      }
    })
    if (isUserExists) return res.status(200).json({
      status: false,
      message: 'Email taken! try another'
    })

    const newUserData = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      uniqueId: null,
      passwordResetToken: null
    }

    const user = await authService.registerUser(newUserData)
    if (user.status == false) return res.status(200).json({
      status: false,
      message: 'Something goes wrong please try again later!'
    })

    return res.status(200).json({
      status: true,
      message: 'Account created'
    })

  } catch (error) {
    console.log(error)
    return res.status(200).json({
      status: false,
      message: 'Something goes wrong please try again later!'
    })
  }
}



exports.login = async (req, res) => {
 
  try {
    const { email, password, uniqueId } = req.body

    const emptyFields = await isAnyEmpty(email, password, uniqueId)

    if (emptyFields === true) return res.status(200).json({
      status: false,
      message: 'Please fill all required fields'
    })

    if(await !isEmailValid(email)) return res.status(200).json({
      status: false,
      message: 'Invalid Email!'
    })

    const { user, error } = await authService.loginUser(email, uniqueId, password)
    if (error) return res.status(200).json({
      status: false,
      message: error
    })

    const payload = { email: user.email }
    const token = await jwtUtils.generateToken(payload)
    res.cookie('fishot-token', token, {
      maxAge: 4.147e+9 // 48days
    })

    req.session.clientEmail = user.email
    res.status(200).json({ 
      status: true,
      message: 'Login successful'
     })
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      status: false,
      message: 'Something goes wrong please try again later!'
    })
  }
}

exports.forgotPassword= async (req, res) => {
  try {
    const { email } = req.body
    const isEmailEmpty = await isAnyEmpty(email)
    if (isEmailEmpty === true) return res.status(200).json({
      status: false,
      message: 'Please fill your email!'
    })
    const isThisEmailValid = await isEmailValid(email)
    if (isThisEmailValid === false) return res.status(200).json({
      status: false,
      message: 'Invalid Email!'
    })
    const isUserExists = await clientsModel.findOne({
      where: {
        email: email
      }
    })
    if (!isUserExists) return res.status(200).json({
      status: false,
      message: 'Email not found!'
    })
    const resetPass = await authService.forgotPassword(email)
    if (resetPass.status === false) return res.status(200).json({
      status: false,
      message: 'Something goes wrong please try again later!'
    })
    res.status(200).json({ 
      status: true,
      message: 'Password reset successful go to your email to view your new password'
     })
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      status: false,
      message: 'Something goes wrong please try again later!'
    })
  }
}

const User = require('../models/authModel')
const jwt = require('jsonwebtoken')
const sendMail = require('./utils/sendmail')
const bcrypt = require('bcryptjs')
const Token = require('./utils/createToken')
const sendMailResetPassword = require('./utils/sendnewPassword')

exports.registerUser = async (userData) => {
  try{
    const user = await User.create(userData)
    const sendToken = await sendMail(userData.email)
    if(sendToken.status == false) {
      await user.destroy()
      return {status: false}
    }
    user.uniqueId = sendToken.token
    let resaveWithToken = await user.save()
  
    return {
      status: true,
      user: resaveWithToken
    }
  } catch(e) {
    console.log(e)
    return {status: false}
  }
}

exports.loginUser = async (email, uniqueId, password) => {
  try {
    const user = await User.findOne({ where: { email: email, uniqueId: uniqueId } })

    if (!user) {
      return {
        error: 'Invalid email or unique ID or password',
        user: null
      }
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
      return {
        error: 'Invalid email or unique ID or password',
        user: null
      }
    }
  
    return {
      error: null,
      user: user
    }
  } catch(e){
    console.log(e)
    return {
      error: 'Unexpected error occured try again later',
      user: null
    }
  }
}

exports.forgotPassword = async (email) => {

  try{
    const user = await User.findOne({ where: { email } })
    const newUserPassword = await Token(8)
  
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(newUserPassword, salt)
    await user.save()
    const sent = await sendMailResetPassword(email, newUserPassword)
    if(sent.status === true) {
      return {
        status: true
      }
    }
  
    return {
      status: false
    }
  } catch(e) {
    console.log(e)
    return {
      status: false
    }
  }


}

// exports.resetPassword = async (email, newPassword) => {
//   const user = await User.findOne({ where: { email } })

//   if (!user) {
//     throw new Error('Email not found')
//   }

//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(newPassword, salt)

//   await user.update({ password: hashedPassword })
// }

exports.findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } })
  return user
}

exports.createSocialUser = async (userData) => {
  const { provider, providerId, email, displayName } = userData
  const user = await User.create({
    provider,
    providerId,
    email,
    displayName
  })

  return user
}

exports.generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email
  }

  const secret = 'your-secret-key' // Replace with your own secret key
  const token = jwt.sign(payload, secret, { expiresIn: '1h' })

  return token
}

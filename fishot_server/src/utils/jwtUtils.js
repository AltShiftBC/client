const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const generateToken = async (payload) => {
  try {

    return await jwt.sign(payload, JWT_SECRET, { expiresIn: '48d'})

  } catch (e) {
    console.log(e.message)
    return null
  }
}

const verifyToken = async (token) => {
  try {
    return  await jwt.verify(token, JWT_SECRET)
  } catch (err) {
    console.log(err.message)
    return null
  }
}

module.exports = {
  generateToken,
  verifyToken,
}

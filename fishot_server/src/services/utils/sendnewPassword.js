const nodemailer = require('nodemailer')
const Token = require('./createToken')

module.exports = async function sendMailResetPassword(receiverEmail, password) {

    const uniqueId = await Token(8)

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        secure: "true",
        port: 465,
        auth: {
            user: process.env.EMAIl_USER,
            pass: process.env.EMAIl_PASS,
        },
        logger: true,
        debug: true
    })

    return await new Promise((resolve) => {

        transporter.sendMail({
            from: 'igirimbabazie72@gmail.com',
            to: receiverEmail,
            subject: 'Fishot Password reset',
            html: `<div>Your new Password is<b>${password}</b> <p>Use this to login to your portal</p></div>`
        }).then(m => resolve({
            status: true
        }))
            .catch(e => {
                console.log(e)
                return resolve({
                    status: false
                })
            })

    })
}
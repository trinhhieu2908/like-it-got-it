const {sendMail} = require('../integration/email')

async function sendMailController (req,res) {
    const emailCustomer = req.body.emailCustomer
    const result = await sendMail(emailCustomer)
    if(result[0]) {
        return res.json({
            errorMsg: result[0],
            data: null
        })
    }
    return res.json({
        errorMsg: null,
        data: result[1]
    })
}
module.exports = {sendMailController}
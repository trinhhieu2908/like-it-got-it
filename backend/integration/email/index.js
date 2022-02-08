var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'duongthuychuong@gmail.com',
    pass: 'rzziyokxapylysgy'
  }
});


async function sendMail(emailCustomer) {
    var mailOptions = {
        from: 'duongthuychuong@gmail.com',
        to: emailCustomer,
        subject: 'HÓA ĐƠN LIKE IT GOT IT',
        html: "<p>Cảm ơn bạn đã tham gia chương trình thử nghiệm. Các sản phẩm trên Website hoàn toàn <b>ảo</b></p>"
      };
      try {
        const info = await transporter.sendMail(mailOptions)
        return [null, info]
      } catch (error) {
        return [error, null]
      }
    
      
}
module.exports = {
    sendMail
}
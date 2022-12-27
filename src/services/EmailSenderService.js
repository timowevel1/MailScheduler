const nodemailer = require('nodemailer');

function sendMail(res, emailTo, emailFrom, subject, cc, bcc, emailBody, mail_url){
    const connection = mail_url ? mail_url : process.env.MAIL_URL;
    const transporter = nodemailer.createTransport(connection);
    let mailOptions = {
        from: emailFrom,
        to: emailTo,
        cc: cc ? cc : '',
        bcc: bcc ? bcc : '',
        subject: subject,
        text: emailBody
    };
    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err);
            res.send(err);
        }
    });
}

module.exports = { sendMail }
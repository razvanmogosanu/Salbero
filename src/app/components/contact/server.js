const nodemailer = require('nodemailer');

const log = console.log;

export function mailHelper() {
    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'razvan.mogosanu1@gmail.com', // TODO: your gmail account
            pass: 'pk4cl7m5' // TODO: your gmail password
        }
    });

    // Step 2
    const mailOptions = {
        from: 'razvan.mogosanu1@gmail.com', // TODO: email sender
        to: 'malina.benegui@gmail.com', // TODO: email receiver
        subject: 'Comanda',
        text: 'nust frate...'
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log('Error occurs');
        }
        return console.log('Email sent!!!');
    });
    return 'ok';
}
// mailHelper();
// document.getElementById("btn-submit").addEventListener("click", mailHelper, false);
// $( "#btn-submit" ).mouseenter(function() {
//     alert( "Handler for .click() called." );
// });

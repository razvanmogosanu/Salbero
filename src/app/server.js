const nodemailer = require('nodemailer');

const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'razvan.mogosanu1@gmail.com', // TODO: your gmail account
        pass: 'pk4cl7m5' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'razvan.mogosanu@gmail.com', // TODO: email sender
    to: 'malinabenegui@gmail.com', // TODO: email receiver
    subject: 'Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});

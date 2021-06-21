const mailer = require('nodemailer')

const MY_EMAIL = 'input ur gmail.com'
const MY_PASSWORD = 'input ur password'

const transport = mailer.createTransport({
	service: 'Gmail',
	auth: {
		user: MY_EMAIL,
		pass: MY_PASSWORD,
	},
});

let sendMail = (email, subject, text) => {
	transport
		.sendMail({
			to: email,
			text: text,
			from: MY_EMAIL,
			subject: subject
		})
		.then((results) => {
			console.log('Письмо успешно отправлено', results);
            
		})
		.catch((reason) => {
			console.log('Письмо не отправлено по причине: ', reason);
		});
}

exports.startDelivery = (req, res) => {
    let user = req.body
    sendMail(user.email, user.subject, user.text)
	return res.status(200).json('письмо отправлено')
}
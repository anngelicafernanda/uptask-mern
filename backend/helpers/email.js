import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
	const { email, nombre, token } = datos;

	var transport = nodemailer.createTransport({
		host: 'sandbox.smtp.mailtrap.io',
		port: 2525,
		auth: {
			user: '8b5ceae61fe95b',
			pass: '41d1ab6ddfc51a',
		},
	});

	// informacion del email

	const info = await transport.sendMail({
		from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
		to: email,
		subject: 'UpTask - Comprueba tu cuenta',
		text: 'Comprueba tu cuenta en UpTask',
		html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
    <a href=${process.env.FRONTEND_URL}/confirmar/${token}>Comprobar cuenta</a>
    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `,
	});
};

import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
	const { email, nombre, token } = datos;
	//To-do mover hacia variables de entorno
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

export const emailOlvidePassword = async (datos) => {
	const { email, nombre, token } = datos;
	//To-do mover hacia variables de entorno
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
		subject: 'UpTask - Reestablece tu Password',
		text: 'Reestablece tu Password',
		html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
    <p>Sigue el siguiente enlace para generar un nuevo password:</p>
    <a href=${process.env.FRONTEND_URL}/olvide-password/${token}>Reestablecer Password</a>
    <p>Si tu no solicitaste este email, puedes ignorar este mensaje</p>
    `,
	});
};

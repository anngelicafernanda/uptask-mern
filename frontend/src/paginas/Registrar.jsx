import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import axios from 'axios';

const Registrar = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repetirPassword, setRepetirPassword] = useState('');
	const [alerta, setAlerta] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if ([nombre, email, password, repetirPassword].includes('')) {
			setAlerta({
				msg: 'Todos los campos son obligatorios',
				error: true,
			});
			return;
		}
		if (password !== repetirPassword) {
			setAlerta({
				msg: 'Las password no coinciden',
				error: true,
			});
			return;
		}
		if (password.length < 6) {
			setAlerta({
				msg: 'El password es muy corto, agrega minimo 6 caracteres',
				error: true,
			});
			return;
		}
		setAlerta({});

		//crear el usuario en la API

		try {
			//To-do mover hacia un cliente axios
			const { data } = await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`,
				{
					nombre,
					email,
					password,
				},
			);
			setAlerta({ msg: data.msg, error: false });

			setNombre('');
			setEmail('');
			setPassword('');
			setRepetirPassword('');
		} catch (error) {
			setAlerta({ msg: error.response.data.msg, error: true });
		}
	};

	const { msg } = alerta;

	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">
				Crea tu Cuenta y Administra Tus{' '}
				<span className="text-slate-700">Proyectos</span>
			</h1>
			{msg && <Alerta alerta={alerta} />}
			<form
				onSubmit={handleSubmit}
				className="my-10 bg-white shadow rounded-lg p-10"
				action=""
			>
				<div className="my-5">
					<label
						className="uppercase text-gray-600 block text-xl font-bold"
						htmlFor="nombre"
					>
						Nombre
					</label>
					<input
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						id="nombre"
						type="text"
						placeholder="Escribe tu Nombre"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="my-5">
					<label
						className="uppercase text-gray-600 block text-xl font-bold"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						id="email"
						type="email"
						placeholder="Email de Registro"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="my-5">
					<label
						className="uppercase text-gray-600 block text-xl font-bold"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						id="password"
						type="password"
						placeholder="Password de Registro"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="my-5">
					<label
						className="uppercase text-gray-600 block text-xl font-bold"
						htmlFor="repetirPassword"
					>
						Repetir Password
					</label>
					<input
						className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
						id="repetirPassword"
						type="password"
						placeholder="Repetir Tu Password"
						value={repetirPassword}
						onChange={(e) => setRepetirPassword(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					value="Crear Cuenta"
					className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors"
				/>
			</form>
			<nav className="lg:flex lg:justify-between">
				<Link
					className="block text-center my-5 text-slate-500 uppercase text-sm"
					to="/"
				>
					¿Ya tienes una cuenta? Inicia Sesión
				</Link>
				<Link
					className="block text-center my-5 text-slate-500 uppercase text-sm"
					to="/olvide-password"
				>
					Olvide mi password
				</Link>
			</nav>
		</>
	);
};

export default Registrar;

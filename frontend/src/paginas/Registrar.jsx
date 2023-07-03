import { Link } from 'react-router-dom';

const Registrar = () => {
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">
				Crea tu Cuenta y Administra Tus{' '}
				<span className="text-slate-700">Proyectos</span>
			</h1>
			<form className="my-10 bg-white shadow rounded-lg p-10" action="">
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

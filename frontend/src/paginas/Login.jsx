const Login = () => {
	return (
		<>
			<h1 className="text-sky-600 font-black text-6xl capitalize">
				Inicia Sesión Y Administra Tus{' '}
				<span className="text-slate-700">Proyectos</span>
			</h1>
			<form className="my-10 bg-white shadow rounded-lg p-10" action="">
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

				<input
					type="submit"
					value="Iniciar Sesión"
					className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors"
				/>
			</form>
		</>
	);
};

export default Login;

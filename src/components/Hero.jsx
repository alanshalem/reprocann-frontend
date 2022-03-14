import { Link } from 'react-router-dom';
const Hero = () => {
	return (
		<>
			<div className="flex flex-col text-center md:w-2/3 mx-auto my-10">
				<span className="font-bold text-xl text-slate-300">Hola,</span>
				<h1 className="font-black text-white text-5xl">
					Hace click en el boton para comenzar a tramitar tu{' '}
					<span className="text-sky-300 text-opacity-80">
						REP
						<span className="text-white text-opacity-80">ROC</span>
						ANN
					</span>
				</h1>
			</div>
			<div className="flex justify-center align-middle">
				<Link to="/nuevo-paciente">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase text py-2 px-4 rounded">
						<span>¡Haz click aqui!</span>
					</button>
				</Link>
			</div>
		</>
	);
};

export default Hero;

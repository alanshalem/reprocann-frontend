import { Link } from 'react-router-dom';
import Fairy from '../public/img/fairy.png';
const Header = () => {
	return (
		<nav className="backdrop-blur-lg py-5 border-b border-solid border-neutral-700 sticky top-0 z-50">
			<div className="flex items-center justify-between px-6 mx-auto max-w-none">
				<Link to="/">
					<span className="flex items-center text-3xl font-bold font-display text-white hover:text-sky-300">
						<img src={Fairy} alt="Logo" className="w-12 m-2" />
						{'NATURABIS - REPROCANN'}
					</span>
				</Link>

				<ul className="text-xl md:flex sm-down:space-y-6 md:space-x-8 text-white ">
					<li className="md:mr-4 hover:text-sky-300">
						<Link to="/nuevo-paciente">QUIERO REGISTRARME</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="sticky backdrop-blur-xl w-full left-0 bottom-0">
			<div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 py-1">
				<div className="flex items-center justify-between">
					<div className="flex items-center text-white">
						Hecho con ❤️ en Argentina
					</div>
					<div className="flex items-center">
						<Link
							to="https://www.linkedin.com/in/alanshalem/"
							className="p-3"
						>
							<FaLinkedin color="#0e76a8" size={30} />
						</Link>
						<Link
							to="https://github.com/alanshalem"
							className="p-3"
						>
							<FaGithub color="#670067" size={30} />
						</Link>
						<a href="mailto: alanshalem@gmail.com" className="p-3">
							<FiMail color="white" size={30} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

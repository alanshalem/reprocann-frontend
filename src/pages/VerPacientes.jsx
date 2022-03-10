import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaHospital } from 'react-icons/fa';
import Pacientes from '../components/Pacientes';
import Spinner from '../components/Spinner';

const VerPacientes = () => {
	const [pacientes, setPacientes] = useState([]);
	const [cargando, setCargando] = useState(true);

	const getPacientes = async () => {
		try {
			const url = `${import.meta.env.VITE_BACKEND_URL}/pacientes`;
			const respuesta = await axios.get(url);
			setPacientes(respuesta.data.pacientes);
			// console.log(respuesta.data.pacientes);
			setCargando(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPacientes();
	}, []);

	return cargando ? (
		<Spinner />
	) : (
		<>
			<h1 className="flex justify-center text-white font-bold text-2xl uppercase text-center m-4">
				<FaHospital
					size={30}
					className="m-0.5 text-bl"
					color={'#1e40af'}
				/>{' '}
				Ver Pacientes
			</h1>

			<Pacientes pacientes={pacientes} setPacientes={setPacientes} />
		</>
	);
};

export default VerPacientes;

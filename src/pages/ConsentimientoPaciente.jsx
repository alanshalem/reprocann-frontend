import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Consentimiento from '../components/Consentimiento';
import Spinner from '../components/Spinner';

const ConsentimientoPaciente = () => {
	const params = useParams();
	const { id } = params;
	const [cargando, setCargando] = useState(true);

	const [paciente, setPaciente] = useState({});

	const consultarPaciente = async () => {
		try {
			const url = `${import.meta.env.VITE_BACKEND_URL}/pacientes/${id}`;
			const respuesta = await axios.get(url);
			setPaciente(respuesta.data.paciente);
			setCargando(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		consultarPaciente();
	}, []);

	return cargando ? (
		<Spinner />
	) : (
		<>
			<h1 className="flex justify-center text-white font-bold text-2xl uppercase text-center m-4">
				Consentimiento Informado Bilateral
			</h1>

			<Consentimiento paciente={paciente} />
		</>
	);
};

export default ConsentimientoPaciente;

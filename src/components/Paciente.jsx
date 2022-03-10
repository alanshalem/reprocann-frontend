import axios from 'axios';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Paciente = ({ paciente, pacientes, setPacientes }) => {
	const { nombreCompleto, dni, codigoVinculacion, _id } = paciente;

	const handleEliminarPaciente = async () => {
		// preguntar al usuario
		Swal.fire({
			title: '¿Estas seguro?',
			text: 'Un paciente que se elimina no se puede recuperar',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar!',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				// pasarlo al action
				try {
					const url = `${
						import.meta.env.VITE_BACKEND_URL
					}/pacientes/delete/${_id}`;
					axios.delete(url);
					// eliminarlo del state
					const pacientesFiltrados = pacientes.filter(
						(paciente) => paciente._id !== _id
					);
					setPacientes(pacientesFiltrados);
				} catch (error) {
					console.log(error);
				}
			}
		});
	};

	return (
		<tr>
			<td className="border text-center px-8 py-4 text-white uppercase">
				{nombreCompleto}
			</td>
			<td className="border text-center px-8 py-4 text-white uppercase">
				{dni}
			</td>
			<td className="border text-center px-8 py-4 text-violet-700">
				{codigoVinculacion}
			</td>
			<td className="border text-center px-8 py-4 text-white uppercase">
				<Link to={`/medico-reprocann-2022/editar-paciente/${_id}`}>
					<button>
						<AiFillEdit
							className="m-0.5"
							size={25}
							color={'#faca0f'}
						/>
					</button>
				</Link>
				<button onClick={handleEliminarPaciente}>
					<AiFillDelete
						className="m-0.5"
						size={25}
						color={'#900d09'}
					/>
				</button>
				<Link to={`/medico-reprocann-2022/descargar-paciente/${_id}`}>
					<button>
						<FiDownload
							className="m-0.5"
							size={25}
							color={'#00bcd4'}
						/>
					</button>
				</Link>
			</td>
		</tr>
	);
};

export default Paciente;

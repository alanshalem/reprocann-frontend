import Paciente from './Paciente';

const Pacientes = ({ pacientes, setPacientes }) => {
	return (
		<>
			<table className="bg-neutral-800 border-collapse ml-auto mr-auto">
				<thead>
					<tr>
						<th className="bg-neutral-800 border text-center px-8 py-4 text-white uppercase">
							Nombre Completo
						</th>
						<th className="bg-neutral-800 border text-center px-8 py-4 text-white uppercase text-xl">
							DNI
						</th>
						<th className="bg-neutral-800 border text-center px-8 py-4 text-white uppercase text-xl">
							Codigo de Vinculacion
						</th>
						<th className="bg-neutral-800 border text-center px-8 py-4 text-white uppercase text-xl">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					{pacientes.map((paciente) => (
						<Paciente
							key={paciente.id}
							paciente={paciente}
							pacientes={pacientes}
							setPacientes={setPacientes}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Pacientes;

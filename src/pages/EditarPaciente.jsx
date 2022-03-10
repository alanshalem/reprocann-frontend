import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Spinner from '../components/Spinner';

const EditarPaciente = ({}) => {
	const [paciente, setPaciente] = useState({});
	const [cargando, setCargando] = useState(true);
	const [consentimiento, setConsentimiento] = useState('');
	const params = useParams();
	const { id } = params;

	const nuevoPacienteSchema = Yup.object().shape({
		nombreCompleto: Yup.string()
			.min(3, 'El nombre es muy corto')
			.max(30, 'El nombre es muy largo')
			.required('El nombre es obligatorio'),
		dni: Yup.number()
			.integer()
			.positive()
			.typeError('El numero no es valido')
			.required('El DNI es obligatorio'),
		direccion: Yup.string()
			.min(3, 'La direccion es muy corta')
			.max(30, 'La direccion es muy larga')
			.required('La direccion es obligatoria'),
		localidad: Yup.string()
			.min(3, 'La localidad es muy corto')
			.max(30, 'La localidad es muy larga')
			.required('La localidad es obligatoria'),
		provincia: Yup.string()
			.min(3, 'La provincia es muy corta')
			.max(30, 'La provincia es muy larga')
			.required('La provincia es obligatoria'),
		codigoVinculacion: Yup.string()
			.min(3, 'El codigo es muy corto')
			.max(30, 'El codigo es muy largo')
			.required('El codigo es obligatorio'),
		patologiaInformada: Yup.string()
			.min(3, 'La patologia es muy corta')
			.max(30, 'La patologia es muy larga')
			.required('La patologia informada es obligatoria'),
		motivoConsentimiento: Yup.string()
			.min(3, 'El motivo es muy corto')
			.max(100, 'El motivo es muy largo')
			.required('El motivo es obligatorio'),
	});

	// console.log(id);

	const getPaciente = async () => {
		try {
			const url = `${import.meta.env.VITE_BACKEND_URL}/pacientes/${id}`;
			const respuesta = await axios.get(url);
			setPaciente(respuesta.data.paciente);
			setCargando(false);
			// console.log(respuesta.data.paciente);
		} catch (error) {
			console.log(error);
		}
	};

	const handleEditarPaciente = async (values) => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: 'Un paciente que se modifica no se puede volver atras',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, modificar!',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			try {
				if (result.isConfirmed) {
					const url = `${
						import.meta.env.VITE_BACKEND_URL
					}/pacientes/update/${id}`;
					const respuesta = axios.post(url, values);
					// console.log(respuesta);
					location.reload();
				}
			} catch (error) {
				console.log(error);
			}
		});
	};

	useEffect(() => {
		getPaciente();
	}, []);

	return cargando ? (
		<Spinner />
	) : (
		<>
			<h1 className="flex justify-center text-white font-bold text-2xl uppercase text-center m-4">
				<span>
					<AiFillEdit size={30} className="m-0.5" color={'#faca0f'} />
				</span>
				Editar Paciente
			</h1>
			<div className="flex justify-center m-1 p-1 rounded-md">
				<Formik
					initialValues={{
						nombreCompleto: paciente?.nombreCompleto,
						dni: paciente?.dni,
						direccion: paciente?.direccion,
						localidad: paciente?.localidad,
						provincia: paciente?.provincia,
						codigoVinculacion: paciente?.codigoVinculacion,
						patologiaInformada: paciente?.patologiaInformada,
						motivoConsentimiento:
							paciente?.motivoConsentimiento ?? consentimiento,
					}}
					enableReinitialize={true}
					onSubmit={(values, { resetForm }) => {
						handleEditarPaciente(values);
						resetForm();
					}}
					handleChange={(e) => {
						setConsentimiento(e.target.value);
					}}
					validationSchema={nuevoPacienteSchema}
				>
					{({ errors, touched }) => {
						return (
							<Form className="w-3/4">
								<div className="grid grid-cols-2 gap-4 mb-5">
									<div>
										<label
											className="block text-white text-sm font-bold m-2 uppercase"
											htmlFor="nombreCompleto"
										>
											Nombre Completo:
										</label>
										<Field
											id="nombreCompleto"
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											type="text"
											name="nombreCompleto"
											placeholder="Nombre Completo"
										/>
										{errors.nombreCompleto &&
										touched.nombreCompleto ? (
											<Error>{errors.nombre}</Error>
										) : null}
										<label
											className="block text-white text-sm font-bold m-2 uppercase"
											htmlFor="dni"
										>
											DNI:
										</label>
										<Field
											id="dni"
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											type="number"
											name="dni"
											placeholder="DNI"
										/>
										{errors.dni && touched.dni ? (
											<Error>{errors.dni}</Error>
										) : null}
										<label
											className="block text-white text-sm font-bold m-2 uppercase"
											htmlFor="codigoVinculacion"
										>
											Codigo de Vinculacion:
										</label>
										<Field
											id="codigoVinculacion"
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											type="text"
											name="codigoVinculacion"
											placeholder="Codigo de Vinculacion"
										/>
										{errors.codigoVinculacion &&
										touched.codigoVinculacion ? (
											<Error>
												{errors.codigoVinculacion}
											</Error>
										) : null}
									</div>

									<div>
										<label
											className="block text-white text-sm font-bold m-2 uppercase"
											htmlFor="direccion"
										>
											Direccion:
										</label>
										<Field
											id="direccion"
											className="border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											type="text"
											name="direccion"
											placeholder="Direccion"
										/>
										{errors.direccion &&
										touched.direccion ? (
											<Error>{errors.direccion}</Error>
										) : null}
										<label
											className="block text-white text-sm font-bold  m-2 uppercase"
											htmlFor="localidad"
										>
											Localidad:
										</label>
										<Field
											id="localidad"
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											type="text"
											name="localidad"
											placeholder="Localidad"
										/>
										{errors.localidad &&
										touched.localidad ? (
											<Error>{errors.localidad}</Error>
										) : null}

										<label
											className="block text-white text-sm font-bold m-2 uppercase"
											htmlFor="provincia"
										>
											Provincia:
										</label>
										<Field
											id="provincia"
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											type="text"
											name="provincia"
											placeholder="Provincia"
										/>
										{errors.provincia &&
										touched.provincia ? (
											<Error>{errors.provincia}</Error>
										) : null}
									</div>
								</div>
								<div className="w-full pb-2">
									<label
										className="block text-white text-sm font-bold  m-2 uppercase"
										htmlFor="patologiaInformada"
									>
										Patologia Informada:
									</label>
									<Field
										id="patologiaInformada"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										type="text"
										name="patologiaInformada"
										placeholder="Patologia Informada"
									/>
									{errors.patologiaInformada &&
									touched.patologiaInformada ? (
										<Error>
											{errors.patologiaInformada}
										</Error>
									) : null}
									<label
										className="block text-white text-sm font-bold m-2 uppercase"
										htmlFor="motivoConsentimiento"
									>
										Motivo Consentimiento:
									</label>
									<Field
										id="motivoConsentimiento"
										className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										type="text"
										name="motivoConsentimiento"
										placeholder="Motivo de Consentimiento"
									/>
									{errors.motivoConsentimiento &&
									touched.motivoConsentimiento ? (
										<Error>
											{errors.motivoConsentimiento}
										</Error>
									) : null}
								</div>
								<div className="flex flex-col items-center justify-center">
									<input
										type="submit"
										value="Guardar"
										className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold uppercase text py-2 px-4 rounded justify-center"
									/>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

EditarPaciente.defaultProps = {
	paciente: {},
};
export default EditarPaciente;

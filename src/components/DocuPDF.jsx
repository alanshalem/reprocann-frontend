import pdf from '@react-pdf/renderer';
import React from 'react';
import FirmaDoctor from '../public/img/white-firma_doctor.png';
const { Document, Text, View, Page, Image } = pdf;

const DocuPDF = ({ paciente }) => {
	const {
		nombreCompleto,
		dni,
		direccion,
		localidad,
		provincia,
		codigoVinculacion,
		patologiaInformada,
	} = paciente;

	const monthNames = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	];

	return (
		<>
			<Document>
				<Page size="A4">
					<View>
						<View className="text-white bg-neutral-900">
							<Text
								style={{
									fontSize: 20,
									textAlign: 'center',
									marginTop: 20,
									marginBottom: 20,
								}}
							>
								Consentimiento Informado Bilateral
							</Text>
							<View
								style={{
									marginTop: 20,
									marginBottom: 20,
								}}
							>
								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>
									{`Entre el Sr/a. ${nombreCompleto} D.N.I ${dni} Con domicilio en ${direccion},  ${localidad}, ${provincia}. En adelante “EL PACIENTE”. ${codigoVinculacion} por una parte; y el Dr. Martino Leonardo DNI 26686517 Matrícula 21279, con domicilio real en Arenales 235 Alcorta, en adelante “EL PROFESIONAL”, por el otro, convienen en celebrar el presente acuerdo de consentimiento informado de acuerdo con lo dispuesto por la Ley 26.529, modificada por la Ley N.º 26.742, conforme los términos establecidos en la Resolución de la Súper Intendencia de Seguros de Salud N° 561/2014, sujeto a las siguientes cláusulas: 
                    `}
								</Text>

								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>
									{`PRIMERO: El PROFESIONAL luego de la evaluación del paciente informa que este: `}
								</Text>
								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>{`${patologiaInformada}`}</Text>
								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>
									{`SEGUNDO: EL PROFESIONAL propone para el tratamiento de la patología detallada en el artículo primero realizar el siguiente tratamiento: Abordar su patología con el consumo de aceite de cannabis de elaboración casera, el cual deberá preparar macerando 100 g de flores secas en un litro de alcohol, durante 2 a 5 minutos para luego filtrar el resultante y dejar evaporar el alcohol a baño maría, hasta eliminarlo por completo, luego diluir lo obtenido en 100 ml de aceite de coco u oliva. Consumiendo 2 gotas cada 8 hs y sos en las crisis.`}
								</Text>

								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>
									{`Para esto podrá contar con un cultivo domiciliario de hasta un máximo de 9 plantas en floración, en macetas. Los beneficios razonables del tratamiento propuesta consisten en ayudar a conciliar el sueño. Los riesgos del tratamiento son: reacciones alérgicas, aumento del apetito y de peso, síndrome amotivacional. Dependencia. Aumento de patologías respiratorias sobre todo si se consume como cigarrillo.`}
								</Text>

								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>
									{`TERCERO: EL PACIENTE declara haber tomado conocimiento y entendido todo lo consignado por el PROFESIONAL, médico tratante. Asimismo, declara haber tenido la oportunidad de realizar todas las preguntas que necesitó para tomar libremente la presente decisión.`}
								</Text>

								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>{`CUARTO: EL/LA PROFESIONAL informó y EL PACIENTE aceptó y comprendió que el aceite de cannabis y sus derivados, para uso medicinal, resultantes de la práctica del cultivo no constituye un medicamento, sustancia y/o producto autorizado y aprobado por la Administración Nacional de Medicamentos, Alimentos y Tecnología (ANMAT), única autoridad regulatoria nacional con competencia para habilitar el registro.`}</Text>

								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>
									{`QUINTO: EL PROFESIONAL, en virtud de lo descripto en la cláusula anterior, es el único responsable del tratamiento propuesto, desde la primera fase de su prescripción, hasta su seguimiento y culminación, conforme él mismo determine.`}
								</Text>
								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>{`SEXTO: EL PACIENTE y EL PROFESIONAL se comprometen a cumplir con los requerimientos establecidos por la autoridad de Aplicación de la Ley 27.350 y su Decreto Reglamentario, como así también toda la normativa relacionada. `}</Text>
								<Text
									style={{
										fontSize: 12,
										textAlign: 'left',
										marginLeft: 20,
										marginRight: 20,
									}}
								>{`SÉPTIMA: EL PACIENTE acepta recibir en cualquier momento, sin necesidad de previo aviso, inspecciones por parte de la autoridad estatal pertinente, a fin de constatar el cumplimiento del tratamiento prescripto por EL PROFESIONAL. Se firman 2 (dos) ejemplares del presente de un mismo tenor en Rosario a los ${new Date().getDate()} dias del ${
									monthNames[new Date().getMonth()]
								} de año ${new Date().getFullYear()}. `}</Text>
								<View
									style={{
										marginTop: 40,
									}}
								>
									<View
										style={{
											display: 'flex',
										}}
									>
										<Image
											src={FirmaDoctor}
											alt="firma"
											style={{
												width: '70px',
												height: '70px',
												margin: 'auto',
											}}
										/>

										<Text
											style={{
												fontSize: 12,
												textAlign: 'center',
												fontWeight: 'bold',
											}}
										>{`Leonardo E. Martino `}</Text>
										<Text
											style={{
												fontSize: 12,
												textAlign: 'center',
												fontWeight: 'bold',
											}}
										>{`Traumatólogo `}</Text>
										<Text
											style={{
												fontSize: 12,
												textAlign: 'center',
												fontWeight: 'bold',
											}}
										>{`Mp. 21279 Reg.Esp 40/0621 `}</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</Page>
			</Document>
		</>
	);
};

export default DocuPDF;

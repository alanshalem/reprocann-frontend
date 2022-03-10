import pdf from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa';
import FirmaDoctor from '../public/img/firma_doctor_negativa.png';
import DocuPDF from './DocuPDF';
const { PDFDownloadLink } = pdf;

const Consentimiento = ({ paciente }) => {
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
			<div>
				<div className="text-white bg-neutral-900">
					<div className="text-lg text-left">
						<p className="m-8">
							{`Entre el Sr/a. ${nombreCompleto} D.N.I ${dni} Con domicilio en ${direccion},  ${localidad}, ${provincia}. En adelante “EL PACIENTE”. ${codigoVinculacion} por una parte; y el Dr. Martino Leonardo DNI 26686517 Matrícula 21279, con domicilio real en Arenales 235 Alcorta, en adelante “EL PROFESIONAL”, por el otro, convienen en celebrar el presente acuerdo de consentimiento informado de acuerdo con lo dispuesto por la Ley 26.529, modificada por la Ley N.º 26.742, conforme los términos establecidos en la Resolución de la Súper Intendencia de Seguros de Salud N° 561/2014, sujeto a las siguientes cláusulas: 
                    `}
						</p>

						<p className="m-8">
							{`PRIMERO: El PROFESIONAL luego de la evaluación del paciente informa que este: `}
						</p>
						<p className="m-8">{`${patologiaInformada}`}</p>
						<p className="m-8">
							{`SEGUNDO: EL PROFESIONAL propone para el tratamiento de la patología detallada en el artículo primero realizar el siguiente tratamiento: Abordar su patología con el consumo de aceite de cannabis de elaboración casera, el cual deberá preparar macerando 100 g de flores secas en un litro de alcohol, durante 2 a 5 minutos para luego filtrar el resultante y dejar evaporar el alcohol a baño maría, hasta eliminarlo por completo, luego diluir lo obtenido en 100 ml de aceite de coco u oliva. Consumiendo 2 gotas cada 8 hs y sos en las crisis.`}
						</p>

						<p className="m-8">
							{`Para esto podrá contar con un cultivo domiciliario de hasta un máximo de 9 plantas en floración, en macetas. Los beneficios razonables del tratamiento propuesta consisten en ayudar a conciliar el sueño. Los riesgos del tratamiento son: reacciones alérgicas, aumento del apetito y de peso, síndrome amotivacional. Dependencia. Aumento de patologías respiratorias sobre todo si se consume como cigarrillo.`}
						</p>

						<p className="m-8">
							{`TERCERO: EL PACIENTE declara haber tomado conocimiento y entendido todo lo consignado por el PROFESIONAL, médico tratante. Asimismo, declara haber tenido la oportunidad de realizar todas las preguntas que necesitó para tomar libremente la presente decisión.`}
						</p>

						<p className="m-8">{`CUARTO: EL/LA PROFESIONAL informó y EL PACIENTE aceptó y comprendió que el aceite de cannabis y sus derivados, para uso medicinal, resultantes de la práctica del cultivo no constituye un medicamento, sustancia y/o producto autorizado y aprobado por la Administración Nacional de Medicamentos, Alimentos y Tecnología (ANMAT), única autoridad regulatoria nacional con competencia para habilitar el registro.`}</p>

						<p className="m-8">
							{`QUINTO: EL PROFESIONAL, en virtud de lo descripto en la cláusula anterior, es el único responsable del tratamiento propuesto, desde la primera fase de su prescripción, hasta su seguimiento y culminación, conforme él mismo determine.`}
						</p>
						<p className="m-8">{`SEXTO: EL PACIENTE y EL PROFESIONAL se comprometen a cumplir con los requerimientos establecidos por la autoridad de Aplicación de la Ley 27.350 y su Decreto Reglamentario, como así también toda la normativa relacionada. `}</p>
						<p className="m-8">{`SÉPTIMA: EL PACIENTE acepta recibir en cualquier momento, sin necesidad de previo aviso, inspecciones por parte de la autoridad estatal pertinente, a fin de constatar el cumplimiento del tratamiento prescripto por EL PROFESIONAL. Se firman 2 (dos) ejemplares del presente de un mismo tenor en Rosario a los ${new Date().getDate()} dias del ${
							monthNames[new Date().getMonth()]
						} de año ${new Date().getFullYear()}. `}</p>
						<div className="flex justify-center mb-8">
							<img src={FirmaDoctor} alt="firma" width={40} />
							<div className="text-center">
								<p className="text-xl">{`Leonardo E. Martino `}</p>
								<p className="text-xl">{`Traumatólogo `}</p>
								<p className="text-xl">{`Mp. 21279 Reg.Esp 40/0621 `}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<PDFDownloadLink
				document={<DocuPDF paciente={paciente} />}
				fileName={`${nombreCompleto}-${dni}-${new Date().getDay()}.pdf`}
			>
				<button className="flex w-full bg-blue-500 hover:bg-blue-700 text-white font-bold m-auto py-2 px-4 rounded">
					<span className="flex m-auto">
						<FaFilePdf size={40} />
					</span>
				</button>
			</PDFDownloadLink>
		</>
	);
};

export default Consentimiento;

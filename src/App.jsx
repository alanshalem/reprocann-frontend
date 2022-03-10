import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ConsentimientoPaciente from './pages/ConsentimientoPaciente';
import EditarPaciente from './pages/EditarPaciente';
import Home from './pages/Home';
import NuevoPaciente from './pages/NuevoPaciente';
import VerPacientes from './pages/VerPacientes';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/nuevo-paciente" element={<NuevoPaciente />} />
				<Route
					path="/medico-reprocann-2022/editar-paciente/:id"
					element={<EditarPaciente />}
				/>
				<Route
					path="/medico-reprocann-2022/descargar-paciente/:id"
					element={<ConsentimientoPaciente />}
				/>
				<Route
					path="/medico-reprocann-2022"
					element={<VerPacientes />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;

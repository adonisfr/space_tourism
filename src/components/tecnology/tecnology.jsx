import Container from '../commun/container';
import DetailsTecnology from './detailsTecnology';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataTecnology } from './slices/tecnologySlices';
const Tecnology = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDataTecnology());
	}, []);

	return (
		<Container
			classContainer="bg-[url('./assets/technology/background-technology-mobile.jpg')] md:bg-[url('./assets/technology/background-technology-tablet.jpg')]
			md:bg-[url('./assets/technology/background-technology-desktop.jpg')]"
			classBody="md:mt-20"
		>
			<DetailsTecnology />
		</Container>
	);
};

export default Tecnology;

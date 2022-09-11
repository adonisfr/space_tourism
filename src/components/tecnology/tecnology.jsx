import Container from '../commun/container';
import bgTecnology from '../../assets/technology/background-technology-mobile.jpg';
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
		<Container background={bgTecnology}>
			<DetailsTecnology />
		</Container>
	);
};

export default Tecnology;

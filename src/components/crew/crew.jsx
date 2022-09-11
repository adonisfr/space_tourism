import { useEffect } from 'react';
import Container from '../commun/container';
import bgCrew from '../../assets/crew/background-crew-mobile.jpg';
import DetailsCrew from './detailsCrew';
import { getDataCrew } from './slices/crewSlices';
import { useDispatch } from 'react-redux';

const Crew = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDataCrew());
	}, []);

	return (
		<Container background={bgCrew} className="px-6">
			<DetailsCrew />
		</Container>
	);
};

export default Crew;

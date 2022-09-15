import { useEffect } from 'react';
import Container from '../commun/container';
import DetailsCrew from './detailsCrew';
import { getDataCrew } from './slices/crewSlices';
import { useDispatch } from 'react-redux';

const Crew = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDataCrew());
	}, []);

	return (
		<Container
			classContainer="bg-[url('./assets/crew/background-crew-mobile.jpg')] md:bg-[url('./assets/crew/background-crew-tablet.jpg')]"
			classBody="px-8 md:mt-20"
		>
			<DetailsCrew />
		</Container>
	);
};

export default Crew;

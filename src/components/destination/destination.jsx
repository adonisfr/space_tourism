import Container from '../commun/container';
import bgDestination from '../../assets/destination/background-destination-mobile.jpg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataDestination } from './slices/destinationSlices';
import DetailsDestination from './detailsDestination';

const Destination = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDataDestination());
	}, []);

	return (
		<Container background={bgDestination} className="px-6">
			<DetailsDestination />
		</Container>
	);
};

export default Destination;

import Container from '../commun/container';
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
		<Container
			classContainer="bg-[url('./assets/destination/background-destination-mobile.jpg')] md:bg-[url('./assets/destination/background-destination-tablet.jpg')]"
			classBody="px-8 md:mt-20"
		>
			<DetailsDestination />
		</Container>
	);
};

export default Destination;

import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from './components/destination/slices/destinationSlices';
import crewReducer from './components/crew/slices/crewSlices';
import tecnologyReducer from './components/tecnology/slices/tecnologySlices';

const store = configureStore({
	reducer: {
		destination: destinationReducer,
		crew: crewReducer,
		tecnology: tecnologyReducer
	}
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from './components/destination/slices/destinationSlices';
import crewReducer from './components/crew/slices/crewSlices';
import tecnologyReducer from './components/tecnology/slices/tecnologySlices';
import menuReducer from './components/commun/header/menu/slices/menuSlice';
import drwawerReducer from './components/commun/header/menu/slices/drawerSlice';

const store = configureStore({
	reducer: {
		destination: destinationReducer,
		crew: crewReducer,
		tecnology: tecnologyReducer,
		menu: menuReducer,
		drawer: drwawerReducer
	}
});

export default store;

import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data.json';

const destinationSlice = createSlice({
	name: 'destination',
	initialState: {
		data: {},
		current: {}
	},
	reducers: {
		getDestination: (state, action) => {
			state.data = action.payload;
		},
		updateCurrentDestination: (state, action) => {
			state.current = action.payload;
		}
	}
});

const { getDestination, updateCurrentDestination } = destinationSlice.actions;

export const getDataDestination = () => {
	return (dispatch) => {
		const tmp = data.destinations || [];
		const dataDestination = tmp.reduce((acc, el) => {
			return {
				...acc,
				[el.name]: el
			};
		}, {});
		dispatch(getDestination(dataDestination));
		dispatch(updateCurrentDestination(tmp[0]));
	};
};

export { getDestination, updateCurrentDestination };
export default destinationSlice.reducer;

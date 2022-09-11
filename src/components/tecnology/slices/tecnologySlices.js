import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data.json';

const tecnologySlice = createSlice({
	name: 'tecnology',
	initialState: {
		dataTecnology: {},
		currentTecnology: {}
	},
	reducers: {
		getTecnology: (state, actions) => {
			state.dataTecnology = actions.payload;
		},
		updateCurrentTecnology: (state, action) => {
			state.currentTecnology = action.payload;
		}
	}
});

const { getTecnology, updateCurrentTecnology } = tecnologySlice.actions;

export const getDataTecnology = () => {
	return (dispatch) => {
		const tmp = data?.technology || [];
		const dataTecnology = tmp.reduce((acc, el) => {
			return {
				...acc,
				[el.name]: el
			};
		}, {});
		dispatch(getTecnology(dataTecnology));
		dispatch(updateCurrentTecnology(tmp[0]));
	};
};

export { getTecnology, updateCurrentTecnology };
export default tecnologySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data.json';

const crewSlice = createSlice({
	name: 'crew',
	initialState: {
		crewData: {},
		currentMember: {}
	},
	reducers: {
		getCrew: (state, action) => {
			state.crewData = action.payload;
		},
		updateCurrentMember: (state, action) => {
			state.currentMember = action.payload;
		}
	}
});

const { getCrew, updateCurrentMember } = crewSlice.actions;

export const getDataCrew = () => {
	return (dispatch) => {
		const tmp = data?.crew || [];
		const dataCrew = tmp.reduce((acc, el) => {
			return {
				...acc,
				[el.role]: el
			};
		}, {});
		dispatch(getCrew(dataCrew));
		dispatch(updateCurrentMember(tmp[0]));
	};
};

export { getCrew, updateCurrentMember };
export default crewSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
	name: 'menu',
	initialState: {
		active: ''
	},
	reducers: {
		setMenuActive: (state, action) => {
			state.active = action.payload;
		}
	}
});

const { setMenuActive } = menuSlice.actions;

export { setMenuActive };
export default menuSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
	name: 'drawer',
	initialState: {
		open: false
	},
	reducers: {
		setOpenDrawer: (state, actions) => {
			state.open = actions.payload;
		}
	}
});
const { setOpenDrawer } = drawerSlice.actions;

export { setOpenDrawer };

export default drawerSlice.reducer;

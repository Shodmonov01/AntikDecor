import { createSlice } from '@reduxjs/toolkit';

const catIdSlice = createSlice({
	name: 'catId',
	initialState: {
		catId: '',
	},
	reducers: {
		selectCatId: (state, action) => {
			state.catId = action.payload;
		},
	},
});

export default catIdSlice.reducer;
export const { selectCatId } = catIdSlice.actions;

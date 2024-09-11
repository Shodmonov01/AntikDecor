import { createSlice } from '@reduxjs/toolkit';

const subCatIdSlice = createSlice({
	name: 'subCatId',
	initialState: {
		subCatId: '',
	},
	reducers: {
		selectSubCatId: (state, action) => {
			state.subCatId = action.payload;
		},
	},
});

export default subCatIdSlice.reducer;
export const { selectSubCatId } = subCatIdSlice.actions;

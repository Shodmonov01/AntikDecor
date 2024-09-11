import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
	name: 'newsData',
	initialState: {
		newsData: [],
	},
	reducers: {
		newsData: (state, action) => {
			state.newsData = action.payload;
		},
	},
});

export default newsSlice.reducer;
export const { newsData } = newsSlice.actions;

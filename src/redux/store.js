import { configureStore } from '@reduxjs/toolkit';

import newsSlice from './newsSlice';
import subCatIdSlice from './subCatIdSlice';
import catIdSlice from './catIdSlice';

const store = configureStore({
	reducer: {
		newsData: newsSlice,
		subCatId: subCatIdSlice,
		catId: catIdSlice,
	},
});

export default store;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MoviesState {
	recommend: any[];
	newDisney: any[];
	original: any[];
	trending: any[];
}

const initialState: MoviesState = {
	recommend: [],
	newDisney: [],
	original: [],
	trending: [],
};

const moviesSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setMovies: (state, action: PayloadAction<MoviesState>) => {
			state.recommend = action.payload.recommend;
			state.newDisney = action.payload.newDisney;
			state.original = action.payload.original;
			state.trending = action.payload.trending;
		},
	},
});

export const { setMovies } = moviesSlice.actions;

export const selectRecommend = (state: RootState) => state.movies.recommend;
export const selectNewDisney = (state: RootState) => state.movies.newDisney;
export const selectOriginal = (state: RootState) => state.movies.original;
export const selectTrending = (state: RootState) => state.movies.trending;

export default moviesSlice.reducer;

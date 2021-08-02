import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from '../features/user/user.slice';
import moviesReducer from '../features/movies/movies.slice';
export const store = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	displayName: string;
	email: string;
	photoURL: string;
}

const initialState: UserState = {
	displayName: '',
	email: '',
	photoURL: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserLoginDetail: (
			state: UserState,
			action: PayloadAction<UserState>
		) => {
			const { displayName, email, photoURL } = action.payload;
			state.displayName = displayName;
			state.email = email;
			state.photoURL = photoURL;
		},
		setSignoutState: (state: UserState) => {
			state.displayName = '';
			state.email = '';
			state.photoURL = '';
		},
	},
});
export const { setUserLoginDetail, setSignoutState } = userSlice.actions;
export default userSlice.reducer;

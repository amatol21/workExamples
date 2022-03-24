import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		messageOne: {
			userId: 0,
			id: 0,
			title: '',
			body: '1'
		},
		messageTwo: {
			userId: 0,
			id: 0,
			title: '',
			body: '2'
		},
		isLoading: false
	},
	reducers: {
		getPostsFetch: (state) => {
			state.isLoading = true;
		},
		getPostsFailure: (state) => {
			state.isLoading = false;
		},
		getPostsSuccess: (state, action) => {
			console.log('action', action);
			state.messageOne = { ...action.payload[0] };
			state.messageTwo = { ...action.payload[1] };
		}
	}
})

export const { getPostsFetch, getPostsFailure, getPostsSuccess } = postsSlice.actions;
export default postsSlice.reducer;





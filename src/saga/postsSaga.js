import { call, put, takeEvery } from 'redux-saga/effects';
import { getPostsSuccess } from '../store/store';

function* postsSagaWorker() {
	const response = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
	const posts = yield response.json();
	yield put(getPostsSuccess(posts));
}

function* postsSagaWatcher() {
	yield takeEvery('postsReducer/getPostsFetch', postsSagaWorker);
}

export default postsSagaWatcher;


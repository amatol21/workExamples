import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './store/store';
import postsSagaWatcher from './saga/postsSaga';

const saga = createSagaMiddleware();
const store = configureStore({
	reducer: {
		posts: postsReducer
	},
	middleware: [saga]
});
saga.run(postsSagaWatcher);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


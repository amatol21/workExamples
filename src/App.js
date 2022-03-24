import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsFetch } from './store/store';

function App() {
	const dispatch = useDispatch();
	const messageOne = useSelector(state => state.posts.messageOne);
	const messageTwo = useSelector(state => state.posts.messageTwo);
	//const isLoading = useSelector(state => state.posts.isLoading);
	//console.log(isLoading);

	return (
		<div className="App">
			<button onClick={() => dispatch(getPostsFetch())} >Push me</button>
			<p>{messageOne.body} <br />
				{messageOne.title}
			</p>
			<p>{messageTwo.body}</p>
		</div>
	);
}

export default App;

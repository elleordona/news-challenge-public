import './App.css';
import { useEffect, useState } from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { getArticleDataAsync } from './utils/newsDataServices';

function App() {
	// set data and error to state
	const [data, setData] = useState([]);
	const [error, setError] = useState({});

	const getArticleData = async () => {
		const data = await getArticleDataAsync();
		// handle errors before setting data
		// if there is an error property in the return, set the error state to the object and data state to an empty array
		if (data?.error) {
			setError(data);
			setData([]);
		}
		// if there is no error property in the return, set the error state to an empty object and the data state to a the data returned
		if (!data?.error) {
			setData(data);
			setError({});
		}
	};

	useEffect(() => {
		// timeout to simulate slow network
		// setTimeout(() => {
		// 	getArticleData();
		// }, 3000);
		getArticleData();
	}, []);

	return (
		<div className="App">
			<Header />
			<hr></hr>
			{/* this will render if there is no data */}
			{error && Object.keys(error).length > 0 && <h2>No data to display</h2>}
			{/* only render if there are no errors with the data */}
			{(!error || Object.keys(error).length === 0) && <ArticleList data={data} headingText={`Today's Top News`} />}
			<hr></hr>
			<Footer />
		</div>
	);
}

export default App;

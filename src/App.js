import './App.css';
import { useEffect, useState } from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData([
			{ id: 1, fields: { headline: 'Headline 1', thumbnail: 'Thumbnail 1' } },
			{ id: 2, fields: { headline: 'Headline 2', thumbnail: 'Thumbnail 2' } },
			{ id: 3, fields: { headline: 'Headline 3', thumbnail: 'Thumbnail 3' } },
		]);
	}, []);

	return (
		<div className="App">
			<Header />
			<hr></hr>
			<ArticleList data={data} headingText={`Today's Top News`} />
			<hr></hr>
			<Footer />
		</div>
	);
}

export default App;

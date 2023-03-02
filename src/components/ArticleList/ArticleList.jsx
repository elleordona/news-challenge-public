// ArticleList Component

const ArticleList = (props) => {
	// map each object in array
	const articleList = props.data.map((article) => (
		<li key={article.id} className="card text-center w-75 mx-auto">
			<img src={article.fields.thumbnail} alt="from guardian api" className="card-img-top rounded mx-auto" />
			<br />
			<p className="h5 card-title">{article.fields.headline}</p>
		</li>
	));

	return (
		<div>
			<h2 className="display-5">{props.headingText}</h2>
			<ul title="articles">
				{/* show loading info while data length is zero */}
				{props.data.length === 0 && <li key="loading">Articles are loading...</li>}
				{/* show the list of articles is there are any*/}
				{props.data.length > 0 && articleList}
			</ul>
		</div>
	);
};

export default ArticleList;

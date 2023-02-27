// ArticleList Component

const ArticleList = (props) => {
	// map each object in array
	const articleList = props.data.map((article) => (
		<li key={article.id}>
			<img src={article.fields.thumbnail} alt="from guardian api" />
			<br />
			<h3>{article.fields.headline}</h3>
		</li>
	));

	return (
		<div>
			<h2>{props.headingText}</h2>
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

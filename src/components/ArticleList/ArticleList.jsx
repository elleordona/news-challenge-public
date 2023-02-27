// ArticleList Component

const ArticleList = (props) => {
	// map each object in array
	const articleList = props.data.map((article) => <li key={article.id}>{article.fields.headline}</li>);

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

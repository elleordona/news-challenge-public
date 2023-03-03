// ArticleList Component

const ArticleList = (props) => {
	// map each object in array
	const articleList = props.data.map((article) => (
		<li key={article.id} className="card text-center w-75 mx-auto">
			<img src={article.fields.thumbnail} alt="from guardian api" className="card-img-top rounded mx-auto" />
			<p className="h5 card-title">{article.fields.headline}</p>
			<p className="fs-6 card-subtitle text-muted">- {article.fields.byline}</p>
		</li>
	));

	return (
		<div>
			<p className="display-5">{props.headingText}</p>
			<ul title="articles">
				{/* show loading info while data length is zero */}
				{props.data.length === 0 && (
					<li key="loading" className="h5">
						Articles are loading...
					</li>
				)}
				{/* show the list of articles is there are any*/}
				{props.data.length > 0 && articleList}
			</ul>
		</div>
	);
};

export default ArticleList;

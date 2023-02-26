// ArticleList Component

const ArticleList = (props) => {
	// map each object in array
	const articleList = props.data.map((article) => <li key={article.id}>{article.fields.headline}</li>);

	return (
		<div>
			<h2>{props.headingText}</h2>
			<ul>{articleList}</ul>
		</div>
	);
};

export default ArticleList;

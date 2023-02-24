// ArticleList Component

const ArticleList = (props) => {
	return (
		<div>
			<h2>{props.headingText}</h2>
			<ul>
				<li>Article 1</li>
				<li>Article 2</li>
				<li>Article 3</li>
			</ul>
		</div>
	);
};

export default ArticleList;

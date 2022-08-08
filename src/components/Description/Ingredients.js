import "../../styles/Description.css";
function Ingredients({ data }) {
	return (
		<div className="ingredients-container">
			<h2>Ingredients</h2>
			<div className="ingredients-list">
				<div className="ingredient-list-view">
					{data.findProduct.ingredients.length > 4 &&
						data?.findProduct.ingredients.map((ingredient) => (
							<p>{ingredient}</p>
						))}
					{/* <p>breadcrumbs, dry</p>
					<p>green onions</p>
					<p>Worcestershire sauce</p>
					<p>tomato</p>
					<p>cucumber</p> */}
				</div>
				{/* <div className="ingredients-line" /> */}
				{/* <div>
					<p>lettuce</p>
					<p>mayonnaise</p>
					<p>whole wheat pitas</p>
					<p>Cheese</p>
					<p>mayo</p>
				</div> */}
			</div>
		</div>
	);
}
export default Ingredients;

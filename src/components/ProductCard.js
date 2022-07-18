import "../styles/ProductCard.css";
import burger from "../asset/burger.png";

const ProductCard = () => {
	return (
		<div className="product-card-container">
			<div className="product-card-image-box">
				<img className="product-image" src={burger} alt="burger" />
			</div>
			<div className="title">
				<p>Regular Chicken Burger</p>
			</div>
			<div className="description">
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
			</div>
			<div className="product-card-footer">
				<div style={{ fontWeight: "bold", color: "#16c313" }}>$42</div>
				<div className="order-button">Order</div>
			</div>
		</div>
	);
};

export default ProductCard;

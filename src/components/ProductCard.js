import "../styles/ProductCard.css";
import burger from "../asset/burger2.png";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, description, price, image }) => {
	return (
		<div className="product-card-container">
			<div className="product-card-image-box">
				<img className="product-image" src={burger} alt="burger" />
			</div>
			<div className="title">
				<p>{name}</p>
			</div>
			<div className="description">
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
			</div>
			<div className="product-card-footer">
				<div style={{ fontWeight: "bold", color: "#16c313" }}>${price}</div>
				<Link
					to={`/${id}`}
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					<div className="order-button">Order</div>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;

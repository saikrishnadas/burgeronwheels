import "../styles/ProductCard.css";
import burger from "../asset/burger2.png";
import { Link } from "react-router-dom";
import "antd/lib/typography/style/index.css";
import { useState } from "react";
import { Typography } from "antd";
const { Paragraph } = Typography;

const ProductCard = ({ id, name, description, price, image }) => {
	const [rows, setRows] = useState(2);
	return (
		<div className="product-card-container">
			<div className="product-card-image-box">
				<img className="product-image" src={burger} alt="burger" />
			</div>
			<div className="title">
				<p>{name}</p>
			</div>
			<div className="description">
				<Paragraph
					ellipsis={{
						rows,
						expandable: false,
						// suffix: "--sometext",
						onEllipsis: (ellipsis) => {
							console.log("Ellipsis changed:", ellipsis);
						},
					}}
					title={`${description}`}
				>
					{description}
				</Paragraph>
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

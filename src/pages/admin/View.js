import "../../styles/Admin.css";
import burger from "../../asset/burger.png";
import AdminNavbar from "../../components/AdminNavbar";
import "antd/lib/typography/style/index.css";
import { useState } from "react";
import { Typography } from "antd";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
const { Paragraph } = Typography;

function View() {
	return (
		<>
			<AdminNavbar />
			<ViewItem />
		</>
	);
}

export function ViewItem() {
	const [rows, setRows] = useState(5);
	const { error, loading, data } = useProducts();
	console.log("data from view", data);
	return (
		<>
			{data?.products.map((product) => (
				<div key={product.id}>
					<div className="view-container">
						<div className="view-image-wrapper">
							<img src={burger} alt="icon" className="view-image" />
						</div>
						<div className="view-item-description">
							<Paragraph
								ellipsis={{
									rows,
									expandable: true,
									// suffix: "--sometext",
									onEllipsis: (ellipsis) => {
										console.log("Ellipsis changed:", ellipsis);
									},
								}}
								title={`${product.description}`}
							>
								{product.description}
							</Paragraph>
						</div>
						<div className="view-item-details">
							<div className="view-items-ingredients">
								{product?.ingredients.map((ingredient) => (
									<span>{ingredient}</span>
								))}
							</div>
							<div className="view-mid-line" />
							<div className="view-items-ingredients">
								{product?.addOns.map((addOn) => (
									<span>{addOn}</span>
								))}
							</div>
						</div>
						<div className="view-buttons-container">
							{/* <div className="view-button">View</div> */}
							<Link
								to={`/admin/update/${product.id}`}
								style={{ color: "inherit", textDecoration: "inherit" }}
							>
								<div className="update-button">Update</div>
							</Link>
							<div className="delete-button">Delete</div>
						</div>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<h4 style={{ marginLeft: "30px" }}>{product.name}</h4>
						<p style={{ fontWeight: "bold" }}>${product.price}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default View;

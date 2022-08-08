import Navbar from "../components/Navbar";
import "../styles/Description.css";
import burger2 from "../asset/burger2.png";
import clock from "../asset/clock.png";
import fire from "../asset/fire.png";
import star from "../asset/star.png";
import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";
import { useProducts } from "../hooks/useProducts";
import { useAddProducts } from "../hooks/useAddProduct";
import { useEffect } from "react";
import Ingredients from "../components/Description/Ingredients";
import AddOns from "../components/Description/AddOns";
import "antd/lib/spin/style/index.css";
import { Spin } from "antd";

function Description() {
	const { id } = useParams();
	console.log(id);
	const { error, loading, data } = useGetProduct(id);
	console.log("data", data);

	return (
		<>
			<span style={{ height: "2vh" }}>
				<Navbar />
			</span>
			{loading ? (
				<div
					style={{
						height: "50vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Spin size="large" />
				</div>
			) : (
				<div className="product-page-container">
					<div className="product-page-box">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<div>
								<img src={burger2} alt="" className="product-image" />
							</div>
							<div>
								<h1 style={{ color: "#FFD93D" }}>{data.findProduct.name}</h1>
							</div>
							<div>
								<p
									style={{
										color: "rgba(255, 255, 255, 0.72)",
										width: "550px",
										paddingLeft: "20px",
										paddingRight: "20px",
									}}
								>
									{data.findProduct.description}
								</p>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "80%",
								}}
							>
								<span
									style={{ display: "flex", gap: "10px", alignItems: "center" }}
								>
									<img src={star} alt="icon1" className="icons" />
									<p>{data.findProduct.rating}</p>
								</span>

								<span
									style={{ display: "flex", gap: "10px", alignItems: "center" }}
								>
									<img src={fire} alt="icon2" className="icons" />
									<p>{data.findProduct.calories} Kcal</p>
								</span>

								<span
									style={{ display: "flex", gap: "10px", alignItems: "center" }}
								>
									<img src={clock} alt="icon3" className="icons" />
									<p>5 - 10 mins</p>
								</span>
							</div>
						</div>
					</div>
					<div className="details-container">
						<Ingredients data={data} />
						<AddOns data={data} />
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								marginRight: "20px",
							}}
						>
							<div className="add-to-cart-button">Add To Cart</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Description;

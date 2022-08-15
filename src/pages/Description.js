import Navbar from "../components/Navbar";
import "../styles/Description.css";
import burger2 from "../asset/burger2.png";
import clock from "../asset/clock.png";
import fire from "../asset/fire.png";
import star from "../asset/star.png";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";
import { useProducts } from "../hooks/useProducts";
import { useAddProducts } from "../hooks/useAddProduct";
import { useState } from "react";
import "antd/lib/spin/style/index.css";
import "antd/lib/message/style/index.css";
import { Spin, Checkbox, message } from "antd";

function Description() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [addons, setAddons] = useState([]);
	const { error, loading, data } = useGetProduct(id);

	const addToCart = () => {
		let item = {
			id: data.findProduct.id,
			name: data.findProduct.name,
			price: data.findProduct.price,
			addons: addons,
			totalPrice: data.findProduct.price,
			count: 1,
		};
		if (JSON.parse(localStorage.getItem("items")) === null)
			localStorage.setItem("items", JSON.stringify([]));
		let items = JSON.parse(localStorage.getItem("items"));
		const found = items.some((el) => el.id === item.id);
		if (!found) {
			items.push(item);
			localStorage.setItem("items", JSON.stringify(items));
		} else {
			console.log("items logging", items);
			const foundItem = items.filter((el) => el.id === item.id);
			console.log("foundItem count", foundItem);
			const updateData = {
				count: foundItem[0].count + 1,
				totalPrice: foundItem[0].totalPrice + item.price,
			};
			const newCart = [
				...items.filter((el) => el.id !== item.id),
				{ ...item, ...updateData },
			];
			console.log("newItems", newCart);
			localStorage.setItem("items", JSON.stringify(newCart));
		}
		message.success("Item added to cart!");
		setTimeout(function () {
			navigate(`/cart`);
		}, 2000);
	};

	const addonsSelected = (checkedValues) => {
		setAddons(checkedValues);
	};

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
							<div className="description-product-container">
								<p className="description-product">
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
						<div className="ingredients-container">
							<h2>Ingredients</h2>
							<div className="ingredients-list">
								<div className="ingredient-list-view">
									{data.findProduct.ingredients.length > 4 &&
										data?.findProduct.ingredients.map((ingredient) => (
											<p>{ingredient}</p>
										))}
								</div>
							</div>
						</div>
						<div className="addons-container">
							<h2>Add Ons</h2>
							{/* <div className="addons-list">
								{data?.findProduct.addOns.map((addon) => (

								))} */}
							<Checkbox.Group
								options={data?.findProduct.addOns.map((addOn) => ({
									label: addOn,
									value: addOn,
								}))}
								onChange={addonsSelected}
							/>
							{/* </div> */}
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								marginRight: "20px",
							}}
						>
							<div className="add-to-cart-button" onClick={addToCart}>
								Add To Cart
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Description;

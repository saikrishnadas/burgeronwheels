import Navbar from "../components/Navbar";
import "../styles/Cart.css";
import burger2 from "../asset/burger2.png";
import { PlusCircleFilled, MinusCircleFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";

function Cart() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("items"))
			? JSON.parse(localStorage.getItem("items"))
			: []
	);
	const [total, setTotal] = useState(0);
	const [delivery, setDelivery] = useState(0);
	const [packing, setPacking] = useState(0);

	console.log("items", items);

	const calculateTotal = () => {
		let totalValue = 0;
		if (items.length > 0) {
			items.map((item) => {
				totalValue = item.totalPrice + totalValue;
			});
			setDelivery(5);
			setPacking(2);
		}
		totalValue = Math.round((totalValue + Number.EPSILON) * 100) / 100;
		setTotal(totalValue);
	};

	useEffect(() => {
		calculateTotal();
	}, [items]);

	const test = () => {
		console.log("total", Math.round((total + Number.EPSILON) * 100) / 100);
	};

	return (
		<>
			<span style={{ height: "2vh" }}>
				<Navbar />
			</span>
			{items && items.length > 0 ? (
				<div className="cart-page-container">
					<div className="cart-page-box">
						{items.map((item) => (
							<div className="cart-item">
								<div className="cart-item-image-container">
									<img src={burger2} alt="item" className="cart-item-image" />
								</div>
								<div>
									<p>{item.name}</p>
								</div>
								<div
									style={{ display: "flex", alignItems: "center", gap: "10px" }}
								>
									<MinusCircleFilled style={{ cursor: "pointer" }} />
									<p>x{item.count}</p>
									<PlusCircleFilled style={{ cursor: "pointer" }} />
								</div>
								<div>
									<p>
										$
										{Math.round((item.totalPrice + Number.EPSILON) * 100) / 100}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="cart-price-container">
						<h2>CheckOut</h2>
						<div className="subtotal">
							<p>Subtotal</p>
							<div className="s-line"></div>
							<div>${total}</div>
						</div>
						<div className="subtotal">
							<p>Estimated Delivery Charges</p>
							<div className="s-line"></div>
							<div>$5</div>
						</div>
						<div className="subtotal">
							<p>Packing Charges</p>
							<div className="s-line"></div>
							<div>$2</div>
						</div>
						<div
							className="subtotal"
							style={{ fontWeight: "bold", marginTop: "40px" }}
						>
							<p>Total</p>
							<div className="s-line"></div>
							<div>
								$
								{Math.round(
									(total + delivery + packing + Number.EPSILON) * 100
								) / 100}
							</div>
						</div>
						<div className="pay-button" onClick={test}>
							Pay
						</div>
					</div>
				</div>
			) : (
				<div>No item in the cart</div>
			)}
		</>
	);
}

export default Cart;

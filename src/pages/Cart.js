import Navbar from "../components/Navbar";
import "../styles/Cart.css";
import burger2 from "../asset/burger2.png";
import { PlusCircleFilled, MinusCircleFilled } from "@ant-design/icons";

function Cart() {
	return (
		<>
			<span style={{ height: "2vh" }}>
				<Navbar />
			</span>

			<div className="cart-page-container">
				<div className="cart-page-box">
					<div className="cart-item">
						<div className="cart-item-image-container">
							<img src={burger2} alt="item" className="cart-item-image" />
						</div>
						<div>
							<p>Regular Chicken Burger</p>
						</div>
						<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<MinusCircleFilled style={{ cursor: "pointer" }} />
							<p>x2</p>
							<PlusCircleFilled style={{ cursor: "pointer" }} />
						</div>
						<div>
							<p>$84</p>
						</div>
					</div>
				</div>

				<div className="cart-price-container">
					<h2>CheckOut</h2>
					<div className="subtotal">
						<p>Subtotal</p>
						<div className="s-line"></div>
						<div>$32</div>
					</div>
					<div className="subtotal">
						<p>Estimated Delivery Charges</p>
						<div className="s-line"></div>
						<div>$32</div>
					</div>
					<div className="subtotal">
						<p>Packing Charges</p>
						<div className="s-line"></div>
						<div>$32</div>
					</div>
					<div
						className="subtotal"
						style={{ fontWeight: "bold", marginTop: "40px" }}
					>
						<p>Total</p>
						<div className="s-line"></div>
						<div>$32</div>
					</div>
					<div className="pay-button">Pay</div>
				</div>
			</div>
		</>
	);
}

export default Cart;

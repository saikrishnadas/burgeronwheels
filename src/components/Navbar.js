import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav-bar">
			<div style={{ color: "#FFD93D" }} className="nav-items">
				Burger On Wheels
			</div>
			<div className="nav-bar-menu">
				<p className="nav-items">Home</p>
				<Link to="/menu">
					<p className="nav-items">Menu</p>
				</Link>

				<p className="nav-items">Contact Us</p>
			</div>
			<div style={{ display: "flex" }}>
				<div className="cart-button" style={{ marginRight: "20px" }}>
					<p style={{ textAlign: "center" }}>Login</p>
				</div>
				<div className="cart-button">
					<p style={{ textAlign: "center" }}>Cart</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

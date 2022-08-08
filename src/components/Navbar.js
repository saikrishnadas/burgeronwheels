import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav-bar">
			<Link to={`/`} style={{ color: "inherit", textDecoration: "inherit" }}>
				<div style={{ color: "#FFD93D" }} className="nav-items">
					Burger On Wheels
				</div>
			</Link>
			<div className="nav-bar-menu">
				<Link to={`/`} style={{ color: "inherit", textDecoration: "inherit" }}>
					<p className="nav-items">Home</p>
				</Link>
				<Link
					to="/menu"
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
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

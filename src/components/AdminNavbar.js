import "../styles/Navbar.css";
import "../styles/Admin.css";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
	return (
		<nav className="nav-bar">
			<div className="nav-items">Burger On Wheels</div>
			<div className="nav-bar-menu">
				<Link
					to={`/admin/add`}
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					<p className="nav-items">Add</p>
				</Link>
				<Link
					to="/admin/view"
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					<p className="nav-items">View</p>
				</Link>
			</div>
			<div style={{ display: "flex" }}>
				<div className="cart-button" style={{ marginRight: "20px" }}>
					<p style={{ textAlign: "center" }}>Orders</p>
				</div>
				<div className="cart-button">
					<p style={{ textAlign: "center" }}>History</p>
				</div>
			</div>
		</nav>
	);
};

export default AdminNavbar;

import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import {
	ShoppingTwoTone,
	HomeTwoTone,
	PieChartTwoTone,
} from "@ant-design/icons";

const NavbarMobile = () => {
	return (
		<nav className="nav-bar-mobile">
			<Link to={`/`} style={{ color: "inherit", textDecoration: "inherit" }}>
				<div style={{ color: "#FFD93D" }} className="nav-items-mobile">
					Burger On Wheels
				</div>
			</Link>
			<div className="nav-bar-menu-mobile">
				<Link to={`/`} style={{ color: "inherit", textDecoration: "inherit" }}>
					<HomeTwoTone twoToneColor="#FFD93D" style={{ fontSize: "50px" }} />
				</Link>
				<Link
					to="/menu"
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					<PieChartTwoTone
						twoToneColor="#FFD93D"
						style={{ fontSize: "50px" }}
					/>
				</Link>
				<Link
					to={`/cart`}
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					<ShoppingTwoTone
						twoToneColor="#FFD93D"
						style={{ fontSize: "50px" }}
					/>
				</Link>
			</div>
		</nav>
	);
};

export default NavbarMobile;

import { Link } from "react-router-dom";
import "../styles/Info.css";
const Info = ({ title, description, buttonText }) => {
	return (
		<div className="info-container">
			<div style={{ fontWeight: "bold", fontSize: "24px" }}>{title}</div>
			<div>{description}</div>
			<Link
				to={`/menu`}
				style={{ color: "inherit", textDecoration: "inherit" }}
			>
				<div className="order-now-button">
					<p style={{ textAlign: "center", fontWeight: "bold" }}>
						{buttonText}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Info;

import "../styles/Info.css";
const Info = ({ title, description, buttonText }) => {
	return (
		<div className="info-container">
			<div style={{ fontWeight: "bold", fontSize: "24px" }}>{title}</div>
			<div>{description}</div>
			<div className="order-now-button">
				<p style={{ textAlign: "center", fontWeight: "bold" }}>{buttonText}</p>
			</div>
		</div>
	);
};

export default Info;

import "../styles/Admin.css";
import close from "../asset/close.png";

const TextBox = ({ ingredient }) => {
	return (
		<div className="textbox">
			<span style={{ marginTop: "5px", marginLeft: "10px" }}>
				<p>{ingredient}</p>
			</span>
			<span style={{ marginRight: "2px" }}>
				<img src={close} alt="close" />
			</span>
		</div>
	);
};

export default TextBox;

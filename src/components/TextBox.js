import "../styles/Admin.css";
import close from "../asset/close.png";

const TextBox = ({ data, index, deleteItem }) => {
	console.log("index", index);
	return (
		<div className="textbox" style={{ marginRight: "10px" }}>
			<span style={{ marginTop: "5px", marginLeft: "10px" }}>
				<p>{data}</p>
			</span>
			<span
				style={{ marginRight: "2px", cursor: "pointer" }}
				onClick={() => deleteItem(index)}
			>
				<img src={close} alt="close" />
			</span>
		</div>
	);
};

export default TextBox;

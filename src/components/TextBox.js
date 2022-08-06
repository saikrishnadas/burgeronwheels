import "../styles/Admin.css";
import close from "../asset/close.png";

const TextBox = ({ data, index, deleteItem }) => {
	console.log("index", index);
	return (
		<div className="textbox" style={{ marginRight: "10px" }}>
			<span style={{ marginLeft: "10px", width: "90px" }}>
				<p className="text-data">{data}</p>
			</span>
			<span
				style={{ marginRight: "2px", marginBottom: "5px", cursor: "pointer" }}
				onClick={() => deleteItem(index)}
			>
				<img src={close} alt="close" />
			</span>
		</div>
	);
};

export default TextBox;

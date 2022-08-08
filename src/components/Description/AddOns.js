import { Checkbox } from "antd";
import "../../styles/Description.css";
function AddOns({ data }) {
	return (
		<div className="addons-container">
			<h2>Add Ons</h2>
			<div className="addons-list">
				{data?.findProduct.addOns.map((addon) => (
					<Checkbox>{addon}</Checkbox>
				))}
			</div>
		</div>
	);
}
export default AddOns;

import { Checkbox } from "antd";
import "../../styles/Description.css";
function AddOns() {
	return (
		<div className="addons-container">
			<h2>Add Ons</h2>
			<div className="addons-list">
				<Checkbox>Cheese</Checkbox>
				<Checkbox>Egg</Checkbox>
				<Checkbox>Chicken Tikka</Checkbox>
				<Checkbox>Onions</Checkbox>
				<Checkbox>Capsicum</Checkbox>
				<Checkbox>Beef Tikka</Checkbox>
			</div>
		</div>
	);
}
export default AddOns;

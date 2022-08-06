import { Button, Checkbox, Form, Input } from "antd";
import TextBox from "../../components/TextBox";
import { useState, useEffect } from "react";

const { TextArea } = Input;
function ProductForm() {
	const [ingredient, setIngredient] = useState("");
	const [ingredients, setIngredients] = useState(["ground chicken", "cheese"]);
	const [addons, setAddons] = useState(["onion", "tomato"]);
	const [addon, setAddon] = useState("");

	const deleteIngredientsItem = (index) => {
		const item = ingredients[index];
		let newIngredients = ingredients.filter((product) => {
			return product !== item;
		});
		setIngredients(newIngredients);
	};

	const deleteAddonsItem = (index) => {
		const item = addons[index];
		let newAddons = addons.filter((product) => {
			return product !== item;
		});
		setAddons(newAddons);
	};

	return (
		<Form
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			name="add-product"
			// onFinish={onSubmit}
			// onFinishFailed={onSubmitFailed}
			autoComplete="off"
			style={{ display: "flex", flexDirection: "column", width: "50%" }}
		>
			<Form.Item
				label="Name"
				name="name"
				rules={[
					{
						required: true,
						message: "Please enter the name!",
					},
				]}
			>
				<Input placeholder="Name" />
			</Form.Item>

			<Form.Item
				label="Description"
				name="description"
				rules={[
					{
						required: true,
						message: "Please enter the description!",
					},
				]}
			>
				<TextArea placeholder="Description" />
			</Form.Item>
			<Form.Item
				label="Price"
				name="price"
				rules={[
					{
						required: true,
						message: "Please enter the price!",
					},
				]}
			>
				<Input placeholder="Price" />
			</Form.Item>
			<Form.Item
				label="Image Url"
				name="image"
				rules={[
					{
						required: true,
						message: "Please enter the price!",
					},
				]}
			>
				<Input placeholder="Image" />
			</Form.Item>

			<Form.Item
				label="Rating"
				name="rating"
				rules={[
					{
						required: false,
						message: "Please enter the price!",
					},
				]}
			>
				<Input placeholder="Rating" />
			</Form.Item>

			<Form.Item
				label="Calories"
				name="calories"
				rules={[
					{
						required: true,
						message: "Please enter the calories!",
					},
				]}
			>
				<Input placeholder="Calories" />
			</Form.Item>
			<Form.Item
				label="Duration"
				name="duration"
				rules={[
					{
						required: true,
						message: "Please enter the duration!",
					},
				]}
			>
				<Input placeholder="Duration" />
			</Form.Item>

			<div style={{ marginLeft: "22%" }}>
				<span style={{ display: "flex", alignItems: "center" }}>
					<p>Ingredients: </p>
					<span
						style={{
							marginLeft: "10px",
							marginBottom: "10px",
							display: "flex",
						}}
					>
						{ingredients.map((ingredient, index) => (
							<TextBox
								data={ingredient}
								index={index}
								deleteItem={deleteIngredientsItem}
							/>
						))}
					</span>
				</span>
				<div style={{ display: "flex" }}>
					<Form.Item
						style={{ flexGrow: "1" }}
						name="ingredients"
						rules={[
							{
								required: true,
								message: "Please enter the ingredients!",
							},
						]}
					>
						<Input
							placeholder="Ingredients"
							onChange={(e) => setIngredient(e.target.value)}
						/>
					</Form.Item>
					<Button onClick={() => setIngredients([...ingredients, ingredient])}>
						Add
					</Button>
				</div>
			</div>

			<div style={{ marginLeft: "22%" }}>
				<span style={{ display: "flex", alignItems: "center" }}>
					<p>Add Ons: </p>
					<span
						style={{
							marginLeft: "10px",
							marginBottom: "10px",
							display: "flex",
						}}
					>
						{addons.map((addon, index) => (
							<TextBox
								data={addon}
								index={index}
								deleteItem={deleteAddonsItem}
							/>
						))}
					</span>
				</span>
				<div style={{ display: "flex" }}>
					<Form.Item
						style={{ flexGrow: "1" }}
						name="addons"
						rules={[
							{
								required: true,
								message: "Please enter the addons!",
							},
						]}
					>
						<Input
							placeholder="Add Ons"
							onChange={(e) => setAddon(e.target.value)}
						/>
					</Form.Item>
					<Button
						onClick={() => {
							setAddons([...addons, addons]);
						}}
					>
						Add
					</Button>
				</div>
			</div>

			<Button
				htmlType="submit"
				style={{ width: "200px", marginLeft: "50%", marginBottom: "50px" }}
			>
				Submit
			</Button>
		</Form>
	);
}

export default ProductForm;

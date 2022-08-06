import { Button, Checkbox, Form, Input } from "antd";
import TextBox from "../../components/TextBox";
import { useState, useEffect } from "react";
import { useAddProducts } from "../../hooks/useAddProduct";

const { TextArea } = Input;
function ProductForm() {
	const [ingredient, setIngredient] = useState("");
	const [ingredients, setIngredients] = useState(["ground chicken", "bbq"]);
	const [addOns, setAddons] = useState(["onion", "tomato"]);
	const [addon, setAddon] = useState("");

	const { addProduct, error, loading, data } = useAddProducts();

	const deleteIngredientsItem = (index) => {
		const item = ingredients[index];
		let newIngredients = ingredients.filter((product) => {
			return product !== item;
		});
		setIngredients(newIngredients);
	};

	const deleteAddonsItem = (index) => {
		const item = addOns[index];
		let newAddons = addOns.filter((product) => {
			return product !== item;
		});
		setAddons(newAddons);
	};

	const onSubmit = (value) => {
		console.log(value, ingredients, addOns);
		let { name, description, image, duration } = value;
		let price = parseFloat(value.price);
		let rating = parseFloat(value.rating);
		let calories = parseInt(value.calories);
		if (name.length > 5 && description.length > 5 && image.length > 5) {
			addProduct({
				variables: {
					input: {
						name,
						description,
						price,
						image,
						rating,
						calories,
						duration,
						ingredients,
						addOns,
					},
				},
			});
		}
	};

	const onSubmitFailed = () => {};

	if (loading) return "Submitting....";

	if (error) return `Submission error! ${error.message}`;

	return (
		<Form
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			name="add-product"
			onFinish={onSubmit}
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
								required: false,
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
						{addOns.map((addon, index) => (
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
								required: false,
								message: "Please enter the addons!",
							},
						]}
					>
						<Input
							placeholder="Add Ons"
							onChange={(e) => setAddon(e.target.value)}
						/>
					</Form.Item>
					<Button onClick={() => setAddons([...addOns, addon])}>Add</Button>
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

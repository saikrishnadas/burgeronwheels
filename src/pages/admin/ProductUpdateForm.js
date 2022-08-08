import { Button, Checkbox, Form, Input } from "antd";
import TextBox from "../../components/TextBox";
import "../../styles/Admin.css";
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/input-number/style/index.css";
import "antd/lib/layout/style/index.css";
import "antd/lib/button/style/index.css";
import "antd/lib/checkbox/style/index.css";
import { useState, useEffect } from "react";
import { useUpdate } from "../../hooks/useUpdate";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
function ProductUpdateForm({ data, loading, error, id }) {
	let navigate = useNavigate();
	const [form] = Form.useForm();

	const [ingredient, setIngredient] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [addOns, setAddons] = useState([]);
	const [addon, setAddon] = useState("");

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

	const {
		updateProduct,
		error: updateError,
		loading: updating,
		data: updateData,
	} = useUpdate();

	const onSubmit = (value) => {
		console.log(value, ingredients, addOns);
		let { name, description, image, duration } = value;
		let price = parseFloat(value.price);
		let rating = parseFloat(value.rating);
		let calories = parseInt(value.calories);
		if (name.length > 5 && description.length > 5 && image.length > 5) {
			updateProduct({
				variables: {
					input: {
						id,
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
			}).then(() => {
				navigate(`/admin/view`);
			});
		}
	};

	useEffect(() => {
		onFill();
	}, [data]);

	const onSubmitFailed = () => {};

	const onFill = () => {
		form.setFieldsValue({
			name: data?.findProduct.name,
			description: data?.findProduct.description,
			price: data?.findProduct.price,
			image: data?.findProduct.image,
		});
		if (data?.findProduct.ingredients) {
			setIngredients(data.findProduct.ingredients);
		}
		if (data?.findProduct.addOns) {
			setAddons(data.findProduct.addOns);
		}
	};

	if (loading) return "loading....";

	if (updating) return "submitting....";

	if (error) return `Submission error! ${error.message}`;

	return (
		<Form
			name="add-product"
			onFinish={onSubmit}
			form={form}
			// onFinishFailed={onSubmitFailed}
			autoComplete="off"
			style={{ display: "flex", flexDirection: "column", width: "50%" }}
		>
			<Form.Item
				label="Name"
				name="name"
				rules={[
					{
						required: false,
						message: "Please enter the name!",
					},
				]}
			>
				<Input
					style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
					placeholder="Name"
				/>
			</Form.Item>

			<Form.Item
				label="Description"
				name="description"
				rules={[
					{
						required: false,
						message: "Please enter the description!",
					},
				]}
			>
				<TextArea
					style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
					placeholder="Description"
				/>
			</Form.Item>
			<Form.Item
				label="Price"
				name="price"
				rules={[
					{
						required: false,
						message: "Please enter the price!",
					},
				]}
			>
				<Input
					style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
					placeholder="Price"
				/>
			</Form.Item>
			<Form.Item
				label="Image Url"
				name="image"
				rules={[
					{
						required: false,
						message: "Please enter the price!",
					},
				]}
			>
				<Input
					style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
					placeholder="Image"
				/>
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
				<Input
					style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
					placeholder="Rating"
				/>
			</Form.Item>

			<Form.Item
				label="Calories"
				name="calories"
				rules={[
					{
						required: false,
						message: "Please enter the calories!",
					},
				]}
			>
				<Input
					style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
					placeholder="Calories"
				/>
			</Form.Item>
			<Form.Item
				label="Duration"
				name="duration"
				rules={[
					{
						required: false,
						message: "Please enter the duration!",
					},
				]}
			>
				<Input
					style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
					placeholder="Duration"
				/>
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
							style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
							placeholder="Ingredients"
							onChange={(e) => setIngredient(e.target.value)}
						/>
					</Form.Item>
					<Button
						style={{
							background: "#ffd93d",
							borderColor: "yellow",
							borderRadius: "10px",
							fontWeight: "bold",
							marginLeft: "20px",
						}}
						onClick={() => setIngredients([...ingredients, ingredient])}
					>
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
							style={{ borderColor: "#ffd93d", borderWidth: "2px" }}
							placeholder="Add Ons"
							onChange={(e) => setAddon(e.target.value)}
						/>
					</Form.Item>
					<Button
						style={{
							background: "#ffd93d",
							borderColor: "yellow",
							borderRadius: "10px",
							fontWeight: "bold",
							marginLeft: "20px",
						}}
						onClick={() => setAddons([...addOns, addon])}
					>
						Add
					</Button>
				</div>
			</div>

			<Button
				htmlType="submit"
				className="submit-button"
				style={{
					width: "200px",
					marginLeft: "50%",
					marginBottom: "50px",
					background: "#ffd93d",
					borderColor: "yellow",
					borderRadius: "10px",
					fontWeight: "bold",
				}}
			>
				Update
			</Button>
		</Form>
	);
}

export default ProductUpdateForm;

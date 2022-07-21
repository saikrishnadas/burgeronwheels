import { useState } from "react";
import { useAddProducts } from "../hooks/useAddProduct";

function Add() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0.0);
	const [image, setImage] = useState("");

	const { addProduct, error, loading, data } = useAddProducts();

	const onSubmit = () => {
		if (name.length > 5 && description.length > 5 && image.length > 5) {
			addProduct({
				variables: {
					input: {
						name,
						description,
						price,
						image,
					},
				},
			}).then(() => {
				setName("");
				setDescription("");
				setPrice();
				setImage("");
			});
		}
	};

	if (loading) return "Submitting...";

	if (error) return `Submission error! ${error.message}`;

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<form
				style={{ display: "flex", flexDirection: "column", width: "300px" }}
			>
				<input placeholder="Name" onChange={(e) => setName(e.target.value)} />
				<textarea
					placeholder="Description"
					onChange={(e) => setDescription(e.target.value)}
				/>
				<input
					placeholder="Price"
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
				<input placeholder="Image" onChange={(e) => setImage(e.target.value)} />
			</form>
			<button onClick={onSubmit}>Submit</button>
		</div>
	);
}

export default Add;

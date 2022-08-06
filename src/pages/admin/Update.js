import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { useAddProducts } from "../../hooks/useAddProduct";
// import "antd/dist/antd.css";
import "../../styles/Admin.css";
import { Button, Checkbox, Form, Input } from "antd";
import TextBox from "../../components/TextBox";
import ProductForm from "./ProductForm";

const { TextArea } = Input;

function Update() {
	// const { addProduct, error, loading, data } = useAddProducts();

	// const onSubmit = () => {
	// 	if (name.length > 5 && description.length > 5 && image.length > 5) {
	// 		addProduct({
	// 			variables: {
	// 				input: {
	// 					name,
	// 					description,
	// 					price,
	// 					image,
	// 				},
	// 			},
	// 		}).then(() => {
	// 			setName("");
	// 			setDescription("");
	// 			setPrice();
	// 			setImage("");
	// 		});
	// 	}
	// };

	// if (loading) return "Submitting....";

	// if (error) return `Submission error! ${error.message}`;

	// const onSubmitFailed = () => {};

	return (
		<>
			<AdminNavbar />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "50px",
				}}
			>
				<ProductForm />
			</div>
		</>
	);
}

export default Update;

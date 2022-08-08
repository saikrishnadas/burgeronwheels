import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { useAddProducts } from "../../hooks/useAddProduct";
import "../../styles/Admin.css";
import { Button, Checkbox, Form, Input } from "antd";
import TextBox from "../../components/TextBox";
import ProductUpdateForm from "./ProductUpdateForm";
import { useParams } from "react-router-dom";
import { useGetProduct } from "../../hooks/useGetProduct";

const { TextArea } = Input;

function Update() {
	const { id } = useParams();
	const { error, loading, data } = useGetProduct(id);
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
				<ProductUpdateForm
					data={data}
					loading={loading}
					error={error}
					id={id}
				/>
			</div>
		</>
	);
}

export default Update;

import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { useAddProducts } from "../../hooks/useAddProduct";
import "../../styles/Admin.css";
import { Button, Checkbox, Form, Input } from "antd";
import TextBox from "../../components/TextBox";
import ProductForm from "./ProductForm";

const { TextArea } = Input;

function Add() {
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

export default Add;

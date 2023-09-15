import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Add from "./pages/admin/Add";
import Description from "./pages/Description";
import AdminHomepage from "./pages/admin";
import Update from "./pages/admin/Update";
import View from "./pages/admin/View";
import Cart from "./pages/Cart";

const client = new ApolloClient({
	uri: "https://burgeronwheels-server.onrender.com/",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="menu" element={<Menu />} />
				<Route path="/admin" element={<AdminHomepage />} />
				<Route path="/admin/add" element={<Add />} />
				<Route path="/admin/view" element={<View />} />
				<Route path="/admin/update/:id" element={<Update />} />
				<Route path="/:id" element={<Description />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</ApolloProvider>
	</BrowserRouter>
);

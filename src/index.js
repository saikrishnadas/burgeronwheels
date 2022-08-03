import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";

const client = new ApolloClient({
	uri: "https://burgeronwheels-backend.herokuapp.com/",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="menu" element={<Menu />} />
			</Routes>
		</ApolloProvider>
	</BrowserRouter>
);

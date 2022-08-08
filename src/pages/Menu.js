import Navbar from "../components/Navbar";
import "../styles/Menu.css";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import "antd/lib/spin/style/index.css";
import { Spin } from "antd";

const Menu = () => {
	const { error, loading, data } = useProducts();
	console.log("data", data);
	return (
		<div>
			<Navbar></Navbar>
			<div className="section">
				<h1>Taste The Best</h1>
				<p>Fresh and authentic burgers</p>
			</div>
			{loading ? (
				<div
					style={{
						height: "50vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Spin size="large" />
				</div>
			) : (
				<div className="container">
					{data?.products.map((product) => (
						<span key={product.id}>
							<ProductCard
								id={product.id}
								name={product.name}
								description={product.description}
								price={product.price}
								image={product.image}
							/>
						</span>
					))}
				</div>
			)}
		</div>
	);
};
export default Menu;

import Navbar from "../components/Navbar";
import "../styles/Menu.css";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";

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
			<div className="container">
				{data?.products.map((product) => (
					<span key={product.id}>
						<Link
							to={`/${product.id}`}
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							<ProductCard
								name={product.name}
								description={product.description}
								price={product.price}
								image={product.image}
							/>
						</Link>
					</span>
				))}
			</div>
		</div>
	);
};
export default Menu;

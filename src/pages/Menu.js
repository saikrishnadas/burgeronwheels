import Navbar from "../components/Navbar";
import "../styles/Menu.css";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

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
				<p>Loading....</p>
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

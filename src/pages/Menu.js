import Navbar from "../components/Navbar";
import "../styles/Menu.css";
import ProductCard from "../components/ProductCard";


const Menu = () => {
	return (<div>
		<Navbar></Navbar>
		<div className="section"><h1>Taste The Best</h1>
		<p>Fresh and authentic burgers</p></div>
		<div className="container">
		<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
		</div>
		</div>



	)
};
export default Menu;

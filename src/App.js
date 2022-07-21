import "./App.css";
import { useProducts } from "./hooks/useProducts";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import ProductCard from "./components/ProductCard";
import burger2 from "./asset/burger2.png";

function App() {
	const { error, loading, data } = useProducts();
	//console.log(data);
	return (
		<div>
			<Navbar />
			<div className="black-box" />

			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<div style={{ width: "400px", height: "400px" }}>
					<div className="truck-image" />
				</div>
				<Info
					title="Enjoy Your Delicious Burger"
					description="Food with love only from natural and fresh products. Tastier only with us.Try out today."
					buttonText="Order Now"
				/>
			</div>
			<div className="headings">
				<h1>Treat Yourself</h1>
				<p>Get something good for yourself and your loved one</p>
			</div>
			<div>
				<div className="products-container">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
				<p
					style={{
						textAlign: "end",
						marginRight: "3.8%",
						cursor: "pointer",
						fontWeight: "bold",
					}}
				>
					View More
				</p>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					paddingLeft: "20px",
					paddingBottom: "50px",
				}}
			>
				<Info
					title="If One is to eat everyone Should Eat"
					description="Food with love only from natural and fresh products. Tastier only with us. Try out today."
					buttonText="About Us"
				/>
				{/* <div className="footer-box-container"> */}
				{/* <div className="footer-triangle" /> */}
				<div className="footer-box">
					<img src={burger2} alt="burger" />
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

export default App;

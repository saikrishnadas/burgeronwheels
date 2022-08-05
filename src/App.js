import "./App.css";
import { useProducts } from "./hooks/useProducts";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import ProductCard from "./components/ProductCard";
import burger2 from "./asset/burger2.png";
import ProductCardHomepage from "./components/ProductCardHomepage";
import { Link } from "react-router-dom";

function App() {
	const { error, loading, data } = useProducts();
	console.log("data", data);
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
					{/* {data.products.slice(0, 4).map((product, index) => (
						<div key={index}>
							<ProductCard
								name={product.name}
								description={product.description}
								price={product.price}
								image={product.image}
							/>
						</div>
					))} */}
					<ProductCardHomepage
						name={"Regular Chicken Burger"}
						price={3}
						id={"251d9154-c52e-44f4-932f-5def9eb845ee"}
					/>
					<ProductCardHomepage
						name={"Chicken Whopper"}
						price={4.2}
						id={"31b9bf81-096f-4183-9461-8149bd83ee26"}
					/>
					<ProductCardHomepage
						name={"Crispy Chicken Burger"}
						price={3.12}
						id={"fa8ff13c-8623-46f7-8f94-3bacd0814522"}
					/>
					<ProductCardHomepage
						name={"Veg Whopper"}
						price={2.42}
						id={"3e003843-855d-4dd3-a491-b95398ed0e90"}
					/>
				</div>
				<Link
					to={`/menu`}
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
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
				</Link>
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

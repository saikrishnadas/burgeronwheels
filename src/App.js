import "./App.css";
import { useProducts } from "./hooks/useProducts";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import ProductCard from "./components/ProductCard";
import burger2 from "./asset/burger2.png";
import ProductCardHomepage from "./components/ProductCardHomepage";
import { Link } from "react-router-dom";
import NavbarMobile from "./components/NavbarMobile";

function App() {
	const { error, loading, data } = useProducts();
	console.log("data", data);
	//console.log(data);
	return (
		<div>
			<Navbar />
			<NavbarMobile />
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
				<h1 className="heading-tag">Treat Yourself</h1>
				<p className="heading-para">
					Get something good for yourself and your loved one
				</p>
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
						description={
							"If you're looking for a hearty meal, this is the burger for you. Made with all-natural chicken breast, seasoned with salt and pepper, and cooked to perfection, this burger is a must-have for anyone looking for a good meal. Pair it with our signature cole slaw and some potato chips, and you'll be in food heaven."
						}
						price={3}
						id={"251d9154-c52e-44f4-932f-5def9eb845ee"}
					/>
					<ProductCardHomepage
						name={"Chicken Whopper"}
						description={
							"Tired of the same old hamburger? Need a change? The Chicken Whopper is just what you need. Unlike a traditional hamburger, the Chicken Whopper is made with 100% ground chicken breast, a combination of red and green peppers, and a special blend of seasonings. The Chicken Whopper is made to order, and is available in single, double, or triple burger patties. The Chicken Whopper is a tasty alternative to the same old hamburger."
						}
						price={4.2}
						id={"31b9bf81-096f-4183-9461-8149bd83ee26"}
					/>
					<ProductCardHomepage
						name={"Crispy Chicken Burger"}
						description={
							"The Crispy Chicken Burger is a double-patty burger with two grilled chicken patties, melted cheese, and a creamy sauce on a toasted bun. This is a healthy option for anyone looking for a burger that doesn't contain beef. The chicken patties are cooked to perfection, and the toasted bun adds a delicious crunch. This is the perfect burger for any occasion."
						}
						price={3.12}
						id={"fa8ff13c-8623-46f7-8f94-3bacd0814522"}
					/>
					<ProductCardHomepage
						name={"Veg Whopper"}
						description={
							"The Veg Whopper is a new product in the fast food industry that is meant to appeal to the vegan community. It's made with plant-based protein, veggies, and a vegan-friendly sauce. The Veg Whopper is made in two different sizes: regular and king. The regular size is enough for one person, while the king size is enough for two people. This is a great option for those who are vegan and want to enjoy fast food."
						}
						price={2.42}
						id={"3e003843-855d-4dd3-a491-b95398ed0e90"}
					/>
					<Link
						to={`/menu`}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						<div className="view-more-mobile">View More</div>
					</Link>
				</div>
				<Link
					to={`/menu`}
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					<p className="view-more">View More</p>
				</Link>
			</div>
			<div className="about-us-container">
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

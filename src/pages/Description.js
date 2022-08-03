import Navbar from "../components/Navbar";
import "../styles/Description.css";
import burger2 from "../asset/burger2.png";
import clock from "../asset/clock.png";
import fire from "../asset/fire.png";
import star from "../asset/star.png";

function Description() {
	return (
		<>
			<span style={{ height: "2vh" }}>
				<Navbar />
			</span>
			<div className="product-page-container">
				<div className="product-page-box">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<div>
							<img src={burger2} alt="" className="product-image" />
						</div>
						<div>
							<h1 style={{ color: "#FFD93D" }}>Regular Chicken Burger</h1>
						</div>
						<div>
							<p style={{ color: "rgba(255, 255, 255, 0.72)", width: "500px" }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "80%",
							}}
						>
							<span style={{ display: "flex" }}>
								<img src={star} alt="icon1" className="icons" />
								<p>4.7</p>
							</span>

							<span style={{ display: "flex" }}>
								<img src={fire} alt="icon2" className="icons" />
								<p>220 Kcal</p>
							</span>

							<span style={{ display: "flex" }}>
								<img src={clock} alt="icon3" className="icons" />
								<p>5 - 10 mins</p>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Description;

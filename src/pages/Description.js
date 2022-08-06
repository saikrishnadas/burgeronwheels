import Navbar from "../components/Navbar";
import "../styles/Description.css";
import burger2 from "../asset/burger2.png";
import clock from "../asset/clock.png";
import fire from "../asset/fire.png";
import star from "../asset/star.png";
import { useParams } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";
import { useProducts } from "../hooks/useProducts";
import { useAddProducts } from "../hooks/useAddProduct";
import { useEffect } from "react";
import Details from "../Details/Details";

function Description() {
	const { id } = useParams();
	console.log(id);
	const { error, loading, data } = useGetProduct(id);
	console.log("data", data);

	return (
		<>
		
			<span style={{ height: "2vh" }}>
				<Navbar />
			</span>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="parent-div">
				<div className="product-page-container">
					<div className="product-page-box">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								// justifyContent:"flex-start",
								//  gap:"-10px"
							}}
						>
							<div>
								<img src={burger2} alt="" className="product-image" style={{margin:"0px"}} />
							</div>
							<div>
								<h1 style={{ color: "#FFD93D",margin:"0px" }}>{data.findProduct.name}</h1>
							</div>
							<div>
								<p
									style={{ color: "rgba(255, 255, 255, 0.72)", width: "500px" }}
								>
									{data.findProduct.description}
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
				<Details></Details>
				</div>
			)}
			
			
		</>
	);
}

export default Description;

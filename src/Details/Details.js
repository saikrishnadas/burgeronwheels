import Description from "../pages/Description";
import IngredientsDetails from "./IngredientsDetails";
import Navbar from "../components/Navbar";
import Extras from "./Extras";
import "./details.css";

const Details = () => {
    return (
        <div className="child-div"><IngredientsDetails></IngredientsDetails><Extras></Extras><div className="addtocart-button">Add To Cart</div></div>
    )
}

export default Details;
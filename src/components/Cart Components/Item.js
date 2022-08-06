import "./item.css";
import burger2 from "../../asset/burger2.png";


const Item = () =>{

    return(<div className="cart-item" >
    <img className="item-image" src={burger2} alt="no-item"></img>
    <p className="item-name"> Regular Chicken Burger</p>
    <p className="no-of-items">*2</p>
    <p className="total-price">$72</p>
</div>)
}

export default Item;
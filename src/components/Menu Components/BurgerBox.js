import "./Burgerbox.css";
import burger from "../../asset/burger.png";
import vector from "../../asset/Vector.png";

const BurgerBox =() =>{
return(
    <div>
    <div className="burgerbox">
    <div className="burger"><img src={burger} style={{width:"300px", 
     height:"200px"}}></img></div>
    <div><h1 style={{color:"#FFD93D", textAlign:"center"}}>Regular chicken Burger</h1></div>
    <div className="description"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
    <div className="icons"><p>1</p><p>2</p><p>3</p></div>
    </div>
    </div>

    

    )


}

export default BurgerBox;
import "./NavigationBar.css";

const NavigationBar = () =>{

    return<span className="navigation-bar">
        <div><p style={{fontWeight:"bold"}}>Burger on wheels</p></div>
        <div style={{display:"flex" , justifyContent:"space-evenly",width:"25rem"}}><p>Home</p>
        <p>Menu</p>
        <p>Contact Us</p></div>
        <div className="cartbutton"><p style={{color:"black"}}>Cart</p></div>
    </span>
}

export default NavigationBar;
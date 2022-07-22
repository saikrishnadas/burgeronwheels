import NavigationBar from "../components/Menu Components/NavigationBar";
import BurgerBox from "../components/Menu Components/BurgerBox";
import Ingredients from "../components/Menu Components/Ingredients";
import AddOns from "../components/Menu Components/AddOns";

const Description = () => {

    return (
        <>
            <NavigationBar />
            <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #000000" }}>
                <BurgerBox />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around",marginRight:"20%" }}>
                    <Ingredients />
                    <AddOns />
                </div>
            </div>
        </>
    )
}

export default Description;
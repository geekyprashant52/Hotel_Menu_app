import "./App.css";
import React from "react";
import CustomHeader from "./UI/CustomHeader/CustomHeader";
import CustomMenu from "./UI/CustomMenu/CustomMenu";
import MenuDataObj from "./Utils/MenuDataAll.js";
import CardsContainer from "./UI/CardsContainer/CardsContainer";
import MenuDataObjBF from "./Utils/MenuDataBreakFast";
import MenuDataObjLunch from "./Utils/MenuDataLunch";
import MenuDataObjShakes from "./Utils/MenuDataShakes";

class App extends React.Component {
  state = {
    MenuDataObj1: MenuDataObj,
    cardsItems: MenuDataObj.cardsItems,
    position: 0,
  };

  onMenuClick = (pos) => {
    this.setState(() => {
      switch (pos) {
        case 0:
          return {
            cardsItems: MenuDataObj.cardsItems,
            position: pos,
          };
        case 1:
          return {
            cardsItems: MenuDataObjBF.cardsItems,
            position: pos,
          };
        case 2:
          return {
            cardsItems: MenuDataObjLunch.cardsItems,
            position: pos,
          };
        case 3:
          return {
            cardsItems: MenuDataObjShakes.cardsItems,
            position: pos,
          };
        default:
          return {
            cardsItems: MenuDataObj.cardsItems,
          };
      }
    });
  };

  render() {
    console.log("Render called");
    return (
      <div className="App">
        <CustomHeader />
        <CustomMenu
          data={this.state.MenuDataObj1.menuCategory}
          onMenuClick={this.onMenuClick}
          position={this.state.position}
        />
        <CardsContainer data={this.state.cardsItems} />
      </div>
    );
  }
}

export default App;

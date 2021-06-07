import classes from "./CustomMenu.module.css";
import React from "react";

const CustomMenu = (props) => {
  const MenuItems = props.data.map((item, pos) => {
    const selectedClass = [classes.menuText_NoBottomLine];
    if (pos === props.position) {
      selectedClass.push(classes.menuTextBottomLine);
    }

    return (
      <div
        key={pos}
        className={classes.menuItemDiv}
        onClick={() => props.onMenuClick(pos)}
      >
        <h3 className={classes.menuText}>{item}</h3>
        <div className={selectedClass.join(" ")}></div>
      </div>
    );
  });

  return <div className={classes.menuItemWrapper}>{MenuItems}</div>;
};

export default CustomMenu;

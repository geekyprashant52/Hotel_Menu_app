import React from "react";
import classes from "./CustomHeader.module.css";

const CustomHeader = () => {
  return (
    <div className={classes.menuWrapper}>
      <h1 className={classes.menuHeading}>Our Menu</h1>
      <div className={classes.orangeLine}></div>
    </div>
  );
};

export default CustomHeader;

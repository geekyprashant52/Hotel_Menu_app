import React from "react";
import classes from "./CardsContainer.module.css";

const CardsContainer = (props) => {
  const Cards = props.data.map((item, pos) => {
    return (
      <div key={item.id} className={classes.BlogItem}>
        <div className={classes.blogleftDiv}>
          <img
            className={classes.cardsImg}
            src={item.imageUrl}
            alt={item.imageAlt}
          />
        </div>
        <div className={classes.blogrightDiv}>
          <div className={classes.titleWrapper}>
            <h1 className={classes.blogTitle}>{item.blogHeading}</h1>
            <h1 className={classes.blogPrice}>{item.price}</h1>
          </div>
          <p className={classes.blogDesc}>{item.description}</p>
        </div>
      </div>
    );
  });

  return <div className={classes.BlogWrapper}>{Cards}</div>;
};

export default CardsContainer;

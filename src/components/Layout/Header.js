import { Fragment } from "react";


import foodImage from "../../assets/food.jpg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>HealthyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt="A table full of healthy food!" />
      </div>
    </Fragment>
  );
};

export default Header;

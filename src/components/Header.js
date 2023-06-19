import React, {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order MFE</h1>
                <HeaderCartButton items={props.items} onOpenCart = {props.showCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table full of food!"/>
            </div>
        </Fragment>
    )
}

export default Header;
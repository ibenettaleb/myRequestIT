import React from 'react';

import classes from './NavigationItems.css'

import Navigation from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <Navigation link={"/"} active>VM Builder</Navigation>
        <Navigation link={"/"}>Checkout</Navigation>
    </ul>
);

export default navigationItems;

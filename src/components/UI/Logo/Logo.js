import React from 'react';

import vmLogo from '../../../assets/images/LogoWhite.png';

import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={vmLogo} alt={"Logo VM"}/>
    </div>
);

export default logo;

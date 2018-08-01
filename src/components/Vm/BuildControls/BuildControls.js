import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

import Card from '../../../components/UI/Card/Card';

const controls = [
    { label: 'Ram', type: 'ram' },
    { label: 'CPU', type: 'cpu' },
    { label: 'Disk', type: 'disk' }
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> $</p>

        <Card/>

        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>CARRY ON</button>
    </div>

);

export default buildControls;

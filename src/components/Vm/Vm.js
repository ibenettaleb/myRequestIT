import React from 'react';
import VmIngredient from './VmIngredient/VmIngredient';

import classes from './Vm.css'

const vm = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <VmIngredient key={igKey + i} type={igKey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding VM Requirement!</p>
    }
    return (
        <div className={classes.Vm}>
            <VmIngredient type={"vm-top"}/>
            {transformedIngredients}
            <VmIngredient type={"vm-bottom"}/>
        </div>
    );
};

export default vm;

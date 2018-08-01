import React, {Component} from 'react';
import PropTypes from 'prop-types'

import classes from './VmIngredient.css';

class VmIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('vm-bottom'):
                ingredient = <div className={classes.VmBottom}/>;
                break;
            case ('vm-top'):
                ingredient = <div className={classes.VmTop}/>;
                break;
            case ('disk'):
                ingredient = <div className={classes.Disk}><p>512Go</p></div>;
                break;
            case ('cpu'):
                ingredient = <div className={classes.CPU}><p>4 Cores</p></div>;
                break;
            case ('ram'):
                ingredient = <div className={classes.Ram}><p>4Go RAM</p></div>;
                break;
            case ('os'):
                ingredient = <div className={classes.OS}><p>Ubuntu 16.04 Server</p></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

VmIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default VmIngredient;

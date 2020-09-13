import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import burgerLogo from '../../../assets/images/burger-logo.png';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                    <div style={{display:'flex',justifyContent: 'flex-end', alignItems: "center"}}>
                        <img src={burgerLogo} alt="MyBurger" style={{width:300}} />
                    </div>

                    <div>
                    {this.props.children}
                    </div>

                </div>
            </Aux>
        )
    }
}

export default Modal;

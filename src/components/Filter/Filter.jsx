import React, { Component } from 'react';
import { AppBar, Button, Dialog, Chip } from 'react-toolbox';

import MultiSelect from '../MultiSelect/MultiSelect';

import style from './_theme.scss';

const logisticsProviders = [
    "Drop Shipment",
    "Local Warehouse",
    "Two-Man Handling"
];

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    handleToggle = () => {
        this.setState({active: !this.state.active});
    };

    actions = [
        { label: "Cancel", onClick: this.handleToggle },
        { label: "Save", onClick: this.handleToggle }
    ];

    render() {
        return (
            <div >
                <AppBar>
                    <Button onClick={this.handleToggle}>Toggle</Button>
                </AppBar>
                <Dialog actions={this.actions} active={this.state.active} onEscKeyDown={this.handleToggle} onOverlayClick={this.handleToggle}>
                    <div>
                        <span className={style.inline_label}>Logistic Providers: </span>
                        <MultiSelect items={logisticsProviders} theme={style} className={style.inline} />
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default Filter;
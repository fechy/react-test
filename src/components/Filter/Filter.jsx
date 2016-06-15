import React, { Component } from 'react';
import { AppBar, Button, Dialog, Chip } from 'react-toolbox';

const logisticsProviders = [
    "Drop Shipment",
    "Local Warehouse",
    "Two-Man Handle"
];

class FilterContent extends Component {

    state = {
        active: []
    };

    handleAdd = (prop) => {
        let arr = this.state.active;
        arr.push(prop);

        this.setState({
            active: arr
        });
    };

    handleRemove = (prop) => {
        const index = this.state.active.indexOf(prop);
        if (index > -1) {
            const arr = this.state.active;
            arr.splice(index, 1);
            console.log(arr, index);
            this.setState({
                active: arr
            });
        }
    };

    printActive = () => {
        return (
            <span>
                {
                    this.state.active.map((lp) => {
                        return (
                            <Chip key={lp} deletable onDeleteClick={this.handleRemove.bind(this, lp)}>
                                {lp}
                            </Chip>
                        )
                    })
                }
            </span>
        );
    };

    printOptions = () => {
        return (
            <span>
                {
                    logisticsProviders.map((lp) => {
                        if (this.state.active.indexOf(lp) > -1) {
                            return (
                                <Chip key={lp} onDeleteClick={this.handleAdd.bind(this, lp)}>
                                    {lp}
                                </Chip>
                            );
                        }

                        return (
                            <Chip key={lp} deletable onDeleteClick={this.handleAdd.bind(this, lp)} deleteIcon="folder">
                                <i className="material-icons">accessibility</i>
                                {lp}
                            </Chip>
                        )
                    })
                }
            </span>
        );
    };

    render() {
        return (
            <div>
                <div>{this.printActive()}</div>
                <div>{this.printOptions()}</div>
            </div>
        )
    }
}

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
                    <FilterContent />
                </Dialog>
            </div>
        )
    }
}

export default Filter;
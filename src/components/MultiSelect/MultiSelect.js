import React, { Component } from 'react';
import { AppBar, Button, Dialog, Chip, Avatar, FontIcon } from 'react-toolbox';

import style from './_theme.scss';

export default class MultiSelect extends Component {

    state = {
        active: []
    };

    addItem = (item) => {
        let arr = this.state.active;
        arr.push(item);

        this.setState({
            active: arr
        });
    };

    removeItem = (item) => {
        const index = this.state.active.indexOf(item);
        if (index > -1) {
            const arr = this.state.active;
            arr.splice(index, 1);


            this.setState({
                active: arr
            });
        }
    };

    handleClick = (item, add) => {
        if (add) {
            this.addItem(item);
        } else {
            this.removeItem(item);
        }
    };

    printOptions = () => {
        return (
            <span>
                {
                    this.props.items.map((lp) => {

                        const active = (this.state.active.indexOf(lp) > -1);

                        return (
                            <Chip key={"option-"+lp} className={style.option + ' ' + (active ? style.active : '')} onClick={this.handleClick.bind(this, lp, !active)}>
                                <span>{lp}</span>
                                <FontIcon value={active ? 'remove' : 'add'} />
                            </Chip>
                        )
                    })
                }
            </span>
        );
    };

    render() {
        return (
            <div className={style.multiselect_div}>
                {this.printOptions()}
            </div>
        )
    }
}

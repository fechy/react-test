import React, { Component } from 'react';

import { Layout, Panel, AppBar, Button } from 'react-toolbox';
import Filter from '../../components/Filter/Filter';

export default class App extends Component {

    render() {
        const styles = require('./App.scss');

        return (
          <Layout>
            <Panel>
                <AppBar className={styles.app}>
                    <h1>WW Test</h1>
                </AppBar>
                <Filter />
            </Panel>
          </Layout>
        );
    }
}

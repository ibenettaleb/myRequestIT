import React, {Component} from 'react';

import Layout from './components/Layout/Layout';
import VmBuilder from './containers/VmBuilder/VmBuilder';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <VmBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;

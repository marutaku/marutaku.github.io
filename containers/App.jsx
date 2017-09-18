import React, {Component, PropTypes} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyRawTheme from '../src/myThemeFile';
import Header from '../components/header';

class App extends Component {

    static get childContextTypes() {
        return {muiTheme: PropTypes.object.isRequired};
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    render() {
        return (
            <div className="animated bounce">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;
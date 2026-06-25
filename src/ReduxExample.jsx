import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state) { // redux state mapping with props
    return {
        products: state
    }
}

const ReduxExample = connect(mapStateToProps)(App);
export default ReduxExample;
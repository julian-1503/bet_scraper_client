/*
 * @flow
 */

import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { actionCreators } from './actions/';


const mapDispatchToProps = (dispatch: Function) => ({
  login: (form: LoginFormType) => dispatch(actionCreators.login(form))
});

export default connect(null, mapDispatchToProps)(Dashboard);


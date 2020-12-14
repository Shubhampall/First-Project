import {connect} from 'react-redux';
import Registration from './index';

import {addToEmail, addToPassword, addToName} from './Action';
const mapStateToProps = (state) => ({data: state.email});
const mapDispatchToProps = (dispatch) => ({
  addToEmailHandler: (data) => dispatch(addToEmail(data)),
  addToPasswordHandler: (data) => dispatch(addToPassword(data)),
  addToNameHandler: (data) => dispatch(addToName(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Registration);

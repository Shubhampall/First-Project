import {connect} from 'react-redux';
import Login from './index';
import {addToEmail, addToPassword} from './Action';
const mapStateToProps = (state) => ({data: state.email});
const mapDispatchToProps = (dispatch) => ({
  addToEmailHandler: (data) => dispatch(addToEmail(data)),
  addToPasswordHandler: (data) => dispatch(addToPassword(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

import {connect} from 'react-redux';
import Login from '../../components/Login/Login';
import {addToEmail, addToPassword} from '../services/Action/Action';
const mapStateToProps = (state) => ({data: state.email});
const mapDispatchToProps = (dispatch) => ({
  addToEmailHandler: (data) => dispatch(addToEmail(data)),
  addToPasswordHandler: (data) => dispatch(addToPassword(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

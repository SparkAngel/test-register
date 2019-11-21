/*eslint-disable*/
import { connect } from 'react-redux';
import { buttonCreator, inputNameCreator } from '../reducers/registerReducer';
import Register from '../components/Register';

const mapStateToProps = (state) => {
  return {
    register: state.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputName: (text) => {
      dispatch(inputNameCreator(text));
    },
    button: (formData) => {
      dispatch(buttonCreator(formData));
    },
  };
};

const registerContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default registerContainer;

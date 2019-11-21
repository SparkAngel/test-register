import { reduxForm } from 'redux-form';
import RegisterForm from '../components/registerForm';

const registerContainerFormRedux
  = reduxForm({ form: 'registerForm' })(RegisterForm);

export default registerContainerFormRedux;

import * as yup from 'yup';

const Validate = yup.object().shape({
  email: yup.string().email("invalid email").required("Please enter your email"),
});

export default Validate;

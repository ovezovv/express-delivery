import * as Yup from 'yup';

const phoneNumberValidation = Yup.object({
  phoneNumber: Yup.string()
    .min(16, 'Must be 16 characters or less')
    .max(16, 'Must be 16 characters or less')
    .required('Phone number must be entered'),
});

export default {
  phoneNumberValidation,
};

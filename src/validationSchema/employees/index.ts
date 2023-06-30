import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  role: yup.string().required(),
  hours_worked: yup.number().integer(),
  user_id: yup.string().nullable(),
});

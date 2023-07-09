import * as yup from 'yup';

export const botValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable(),
});

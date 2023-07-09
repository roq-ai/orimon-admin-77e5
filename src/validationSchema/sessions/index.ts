import * as yup from 'yup';

export const sessionValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date(),
  user_id: yup.string().nullable(),
  bot_id: yup.string().nullable(),
});

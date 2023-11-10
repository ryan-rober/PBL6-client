import * as yup from 'yup'

const scheme = (t: any) => yup.object().shape({
  email: yup.string().trim()
    .required(t('error_message:validation.required', { key: t('registration_course.create.course_name') }))
    .max(200, t('error_message:validation.max_length', { key: t('registration_course.create.course_name'), max: 200 })),
  password: yup.string().trim()
    .required(t('error_message:validation.required', { key: t('registration_course.create.course_name') }))
    .min(8, t('error_message:validation.max_length', { key: t('registration_course.create.course_name'), min: 8 }))
    .max(32, t('error_message:validation.max_length', { key: t('registration_course.create.course_name'), max: 32 })),
})

export default scheme

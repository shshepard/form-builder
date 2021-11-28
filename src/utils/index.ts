import * as yup from "yup";

const yupComponent = yup.object().shape({
  id: yup.string().required(),
  label: yup.string(),
  hint: yup.string(),
  required: yup.boolean(),
  component: yup
    .object()
    .shape({
      type: yup.mixed().oneOf(["text", "select", "checkbox"]).required(),
      params: yup.object(),
    })
    .required(),
});

const validationSchema = yup.object().shape({
  title: yup.string(),
  submitText: yup.string(),
  components: yup.array().of(yupComponent).required(),
});

export const validateSchema = (schema: object): Promise<any> =>
  validationSchema.validate(schema, { strict: true });

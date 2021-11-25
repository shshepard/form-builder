import * as yup from "yup";

const validationSchema = yup.array().of(
  yup.object().shape({
    id: yup.string().required(),
    label: yup.string(),
    type: yup.mixed().oneOf(["text", "select", "checkbox"]).required(),
    hint: yup.string(),
    required: yup.boolean(),
  })
);

export const validateSchema = (schema: object): Promise<any> =>
  validationSchema.validate(schema, { strict: true });

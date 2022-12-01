import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("Coloca o email otario!"),
  password: yup
    .string()
    .required("Sem senha não dá né irmão!")
    .min(8, "Número minimo de 8")
    .max(30, "Número maximo de 30"),
});

export type SchemaValidation = yup.Asserts<typeof schema>;

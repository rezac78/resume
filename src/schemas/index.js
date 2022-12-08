import * as yup from "yup";

export const FormSchema = yup.object().shape({
  user_email: yup
    .string()
    .email("please enter a valid email ایمیل نامعتبر")
    .required("Email must not be empty خالیه :( "),
  user_name: yup.string().required("name must not be empty خالیه :( "),
  message: yup.string("fhdn").required("message must not be empty خالیه :( "),
  
});


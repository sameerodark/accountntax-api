import * as yup from 'yup';
import valMsg from "@/utils/validation.json";

export const UserSchema: any = {

  emailExist: yup.object({
    email: yup
      .string()
      .trim()
      .email()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Email"))
      .required(valMsg.required.replace("Field", "Email")),
  }),

  mobileExist: yup.object({
    mobile: yup
      .string()
      .trim()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Mobile Number"))
      .required(valMsg.required.replace("Field", "Mobile Number")),
  })


}

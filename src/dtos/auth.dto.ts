import * as yup from 'yup';
import valMsg from "@/utils/validation.json";

export const AuthSchema: any = {

  login: yup.object({

    role: yup
      .string()
      .trim()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Role"))
      .oneOf(['admin', 'user'])
      .required(valMsg.required.replace("Field", "Role")),

    email: yup
      .string()
      .trim()
      .email()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Email"))
      .required(valMsg.required.replace("Field", "Email")),

    password: yup
      .string()
      .trim()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Password"))
      .required(valMsg.required.replace("Field", "Password")),

  }),

  signupUser: yup.object({

    firstName: yup
      .string()
      .trim()
      .min(3, valMsg.minLength.replace("{length}", "3").replace("Field", "First Name"))
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "First Name"))
      .required(valMsg.required.replace("Field", "First Name")),

    lastName: yup
      .string()
      .trim()
      .min(3, valMsg.minLength.replace("{length}", "3").replace("Field", "Last Name"))
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Last Name"))
      .required(valMsg.required.replace("Field", "Last Name")),

    role: yup
      .string()
      .trim()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Role"))
      .oneOf(['admin', 'client'])
      .required(valMsg.required.replace("Field", "Role")),

    email: yup
      .string()
      .trim()
      .email()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Email"))
      .required(valMsg.required.replace("Field", "Email")),

    mobile: yup
      .string()
      .trim()
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Mobile Number"))
      .required(valMsg.required.replace("Field", "Mobile Number")),

    password: yup
      .string()
      .trim()
      .min(4, valMsg.minLength.replace("{length}", "4").replace("Field", "Password"))
      .max(100, valMsg.maxLength.replace("{length}", "100").replace("Field", "Password"))
      .required(valMsg.required.replace("Field", "Password")),

    profileImage: yup
      .string()
      .trim()
      .optional()
      .max(500, valMsg.maxLength.replace("{length}", "500").replace("Field", "Profile Image")),

    address: yup
      .string()
      .trim()
      .optional()
      .max(1000, valMsg.maxLength.replace("{length}", "1000").replace("Field", "Address")),

    gender: yup
      .string()
      .trim()
      .optional()
      .oneOf(['male', 'female', ''])
      .max(1000, valMsg.maxLength.replace("{length}", "1000").replace("Field", "Gender")),

    dob: yup
      .date()
      .optional(),

    status: yup
      .boolean(),

    isDeleted: yup
      .boolean(),

    isEmailVerified: yup
      .boolean(),

    isMobileVerified: yup
      .boolean()

  })


}

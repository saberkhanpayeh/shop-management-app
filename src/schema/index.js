import * as Yup from "yup";

const loginFromSchema = Yup.object({
  username: Yup.string()
    .matches(/^[\x00-\x7F]*$/, "کیبورد خود را تغییر دهید!")
    .required("نام کاربری الزامی است!")
    .min(3, "نام کاربری نباید از سه کاراکتر کم تر باشد!"),
  password: Yup.string()
    .matches(/^[\x00-\x7F]*$/, "کیبورد خود را تغییر دهید!")
    .required("کاربر گرامی ورود رمز عبور الزامی ست!"),
});

const registerFromSchema = Yup.object({
  username: Yup.string()
    .matches(/^[\x00-\x7F]*$/, "کیبورد خود را تغییر دهید!")
    .required("نام کاربری الزامی است!")
    .min(3, "نام کاربری نباید از سه کاراکتر کم تر باشد!"),
  password: Yup.string()
    .required("کاربری گرامی ایجاد رمز عبور الزامی است")
    .min(5, "رمز عبور نباید کم تر از 5حرف باشد!")
    .matches(
      /^[\x00-\x7F]*$/,
      "حروفی غیر از حروف انگلیسی برای رمز عبور مناسب نمی باشد!"
    )
    .matches(
      /[!@#$^&(),.?":{}|<>]/,
      "رمز عبور حداقل باید شامل یکی از علائم'@#$^&(),.?:{}|<>'باشد"
    )
    .matches(/[0-9]/, "رمز عبور حداقل باید شامل یک عدد باشد!")
    .matches(/[A-Z]/, "رمز عبور حداقل باید شامل یک حرف بزرگ باشد")
    .matches(/[a-z]/, "رمز عبور باید شامل حداقل یک حرف کوچک باشد!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور و تکرار رمز عبور باید یکسان باشند!")
    .required("تکرار رمز عبور الزامی است"),
});
const productsFormSchema = Yup.object({
  name: Yup.string().required("نام محصول الزامی است!"),
  quantity: Yup.string()
    .required("مقدار موجودی محصول الزامی است!")
    .matches(/^[0-9]+$/, "مقدار وارد شده مجاز نمی باشد"), //just positive number and 0 are valid
  price: Yup.string()
    .required("قیمت محصول الزامی است!")
    .matches(/^(0|[1-9][0-9]*)(\.[0-9]+)?$/, "مقدار وارد شده مجاز نمی باشد!"), //just positive decimal numbers are valid
});
export { loginFromSchema, registerFromSchema, productsFormSchema };

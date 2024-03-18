import { useState } from "react";
import { useFormik } from "formik";
import warningOutlineIcon from "../../assets/warning-outline.svg";

import RegisterLoginLayout from "./RegisterLoginLayout";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (values: LoginFormValues) => {
    const errors: Partial<LoginFormValues> = {};

    if (!values.email) {
      errors.email = "Email required.";
    } else if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Please enter a valid email.";
    }

    if (!values.password) {
      errors.password = "Password required.";
    }

    if (values.password) {
      setShowPasswordIcon(true);
    } else {
      setShowPasswordIcon(false);
    }

    return errors;
  };

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log("Form submitted", values);
      setSubmitting(false);
    },
  });

  return (
    <>
      <RegisterLoginLayout />

      <div className="login-container relative z-10">
        <div className="login-logo font-bold text-[#1A1F36] text-xl pl-[18px]">
          mp.
        </div>

        <div className="sub-login-container mb-6 bg-white shadow-[0_5px_15px_0_rgba(0,0,0,.12)] rounded-md">
          <h3 className="mb-6 text-2xl text-[#3C4257] font-bold">
            Sign in to your account
          </h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-7">
              <div>
                <label
                  htmlFor="loginEmailInput"
                  className="block mb-1 text-sm text-[#1A1F36] font-semibold cursor-pointer"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="loginEmailInput"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={() => (formik.touched.email = false)}
                  value={formik.values.email}
                  formNoValidate
                  className={`px-3 py-1.5 mb-3 w-full h-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] ${
                    formik.touched.email && formik.errors.email
                      ? "border-[#ff3860]"
                      : null
                  }`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="flex space-x-1">
                    <img
                      src={warningOutlineIcon}
                      alt="Warning"
                      className="size-3.5"
                    />
                    <span className="text-xs text-[#ff3860]">
                      {formik.errors.email}
                    </span>
                  </div>
                ) : null}
              </div>
              <div>
                <div className="flex justify-between space-x-4">
                  <label
                    htmlFor="loginPasswordInput"
                    className="block mb-1 text-sm text-[#1A1F36] font-semibold cursor-pointer"
                  >
                    Password
                  </label>
                  <a
                    href=""
                    className="text-sm text-[#635BFF] font-semibold outline-none focus:rounded-md focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] hover:text-[#1A1F36]"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="loginPasswordInput"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onFocus={() => (formik.touched.password = false)}
                    value={formik.values.password}
                    formNoValidate
                    className={`px-3 py-1.5 mb-3 w-full h-full text-[#1A1F36] text-sm rounded-md outline-none border input-with-image focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] ${
                      formik.touched.password && formik.errors.password
                        ? "border-[#ff3860]"
                        : null
                    }`}
                  />
                  <div
                    onClick={() => setShowPassword((prevVal) => !prevVal)}
                    className={`password-icons top-1/2 right-3 -translate-y-[60%] cursor-pointer ${
                      showPasswordIcon ? "absolute" : "hidden"
                    }`}
                  >
                    {showPassword ? (
                      <ion-icon name="eye-off-outline"></ion-icon>
                    ) : (
                      <ion-icon name="eye-outline"></ion-icon>
                    )}
                  </div>
                </div>

                <div className="w-full h-12">
                  {formik.touched.password && formik.errors.password ? (
                    <div className="flex space-x-1 mb-2">
                      <img
                        src={warningOutlineIcon}
                        alt="Warning"
                        className="size-3.5"
                      />
                      <span className="text-xs text-[#ff3860]">
                        {formik.errors.password}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="py-3 mb-7 w-full text-white bg-[#645BFF] rounded-lg outline-none focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
            >
              Continue
            </button>
            <div className="text-sm text-center">
              <span className="text-[#3C4257]">Don't have an account?</span>
              <a
                href=""
                className="ml-1 text-[#635BFF] outline-none focus:rounded-md focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] hover:text-[#50566E]"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>

        <div className="grow shrink" />

        <div className="login-footer pl-[18px]">
          <div className="relative flex space-x-2 items-center mb-6 text-sm text-[#697387]">
            <a
              href=""
              className="transition-colors hover:text-[#1A1F36] outline-none focus:rounded-md focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
            >
              &copy; Mp
            </a>
            <div className="size-0.5 bg-[#697387]" />
            <a
              href=""
              className="transition-colors hover:text-[#1A1F36] outline-none focus:rounded-md focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
            >
              Privacy and terms
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import { useState } from "react";
import { useFormik } from "formik";
import warningOutlineIcon from "../../assets/warning-outline.svg";

import RegisterLoginLayout from "./RegisterLoginLayout";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  privacyCheck: boolean;
}

interface ValidateRegisterValues {
  email: string;
  password: string | boolean;
}

const Register: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (values: RegisterFormValues) => {
    const errors: Partial<ValidateRegisterValues> = {};

    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Please enter a valid email.";
    }

    if (values.password && values.password.length < 10) {
      errors.password =
        "Your password is not strong enough. Your password must be at least 10 characters.";
    }

    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.privacyCheck &&
      Object.keys(errors).length === 0
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    if (values.password) {
      setShowPasswordIcon(true);
    } else {
      setShowPasswordIcon(false);
    }

    return errors;
  };

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      privacyCheck: false,
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

      <div className="z-10 relative register-container">
        <div className="register-logo font-bold text-[#1A1F36] text-xl mb-5 pl-[18px]">
          mp.
        </div>

        <div className="register-subcontainer-left self-start w-full h-full pt-[72px] px-4">
          <div className="font-bold text-[#1A1F36] text-xl mb-7 px-7">mp.</div>
          <ul role="list" className="flex flex-col space-y-6">
            <li>
              <div className="flex space-x-3">
                <div>
                  <div className="checkmark border-[1.5px] border-[#635BFF]" />
                </div>
                <div>
                  <span className="block font-semibold text-[#1A1F36] mb-1">
                    Get started quickly
                  </span>
                  <span className="block max-w-[345px] text-sm text-[#3C4257] lg:max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem nam sequi inventore.
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <div>
                  <div className="checkmark border-[1.5px] border-[#635BFF]" />
                </div>
                <div>
                  <span className="block font-semibold text-[#1A1F36] mb-1">
                    Features that will blow your mind
                  </span>
                  <span className="block max-w-[345px] text-sm text-[#3C4257] lg:max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero et voluptate perspiciatis quam earum!
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <div>
                  <div className="checkmark border-[1.5px] border-[#635BFF]" />
                </div>
                <div>
                  <span className="block font-semibold text-[#1A1F36] mb-1">
                    Markdown compatibility
                  </span>
                  <span className="block max-w-[345px] text-sm text-[#3C4257] lg:max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, quis. Libero, esse.
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <div className="grow shrink" />

          <div className="relative flex space-x-2 items-center mb-4 text-sm text-[#697387]">
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

        <div className="register-subcontainer-right bg-white shadow-[0_5px_15px_0_rgba(0,0,0,.12)] rounded-md">
          <div>
            <h3 className="mb-6 text-2xl text-[#3C4257] font-bold">
              Create your Mp. account
            </h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col space-y-7">
                <div>
                  <label
                    htmlFor="registerFnameInput"
                    className="block mb-1 text-sm text-[#1A1F36] font-semibold cursor-pointer"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="registerFnameInput"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="px-3 py-1.5 mb-3 w-full h-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="registerLnameInput"
                    className="block mb-1 text-sm text-[#1A1F36] font-semibold cursor-pointer"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="registerLnameInput"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className="px-3 py-1.5 mb-3 w-full h-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="registerEmailInput"
                    className="block mb-1 text-sm text-[#1A1F36] font-semibold cursor-pointer"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="registerEmailInput"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onFocus={() => (formik.touched.email = false)}
                    value={formik.values.email}
                    className={`px-3 py-1.5 mb-3 w-full h-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] ${
                      formik.touched.email && formik.errors.email
                        ? "border-[#ff3860]"
                        : null
                    }`}
                  />
                  <div>
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
                </div>
                <div>
                  <label
                    htmlFor="registerPasswordInput"
                    className="block mb-1 text-sm text-[#1A1F36] font-semibold cursor-pointer"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="registerPasswordInput"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onFocus={() => (formik.touched.password = false)}
                      value={formik.values.password}
                      className={`px-3 py-1.5 mb-3 w-full h-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] ${
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
                  <div className="w-full h-11">
                    {formik.touched.password && formik.errors.password ? (
                      <div className="flex space-x-1">
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
              <div className="flex items-start space-x-1 mb-7">
                <input
                  type="checkbox"
                  name="privacyCheck"
                  checked={formik.values.privacyCheck}
                  onChange={formik.handleChange}
                  className="appearance-none relative size-4 border p-2 rounded-md outline-none shadow-sm focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] checked:bg-[#635BFF]"
                />
                <label className="text-xs leading-5 text-[#697387]">
                  Have you read the Privacy Policy? If yes, then please go ahead
                  to creating an account.
                  <span>
                    <a
                      href=""
                      className="ml-0.5 text-[#4E10E2] font-semibold outline-none focus:rounded-md focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`py-3 mb-7 w-full text-white rounded-lg outline-none focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] ${
                  isButtonDisabled ? "bg-[#b2AEFF]" : "bg-[#645BFF]"
                }`}
              >
                Create account
              </button>
              <div className="text-sm text-center">
                <span className="text-[#3C4257]">Have an account?</span>
                <a
                  href=""
                  className="ml-1 text-[#635BFF] outline-none focus:rounded-md focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)] hover:text-[#50566E]"
                >
                  Sign in
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="grow shrink" />

        <div className="register-footer pl-[18px]">
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

export default Register;

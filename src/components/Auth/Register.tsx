import eyeOutlineIcon from "../../assets/eye-outline.svg";

const Register: React.FC = () => {
  return (
    <>
      <div className="registerAndLoginMobile-background">
        <div className="registerAndLogin-skew">
          <div className="registerAndLogin-grayBackground" />
          <div className="w-[1px] bg-gray-200 absolute top-[-100vh] registerAndLoginBg-verticalLine-first" />
          <div className="w-[1px] bg-gradient-to-b from-gray-200 to-transparent absolute top-[-100vh] bottom-[-100vh] registerAndLoginBg-verticalLine-second" />
          <div className="w-[1px] bg-gradient-to-b from-gray-200 to-transparent absolute top-[-100vh] bottom-[-100vh] registerAndLoginBg-verticalLine-third" />
          <div className="w-[1px] bg-gradient-to-b from-gray-200 to-transparent absolute top-[-100vh] bottom-[-100vh]  registerAndLoginBg-verticalLine-fourth" />
          <div className="w-[1px] bg-gray-200 absolute top-[-100vh] registerAndLoginBg-verticalLine-fifth" />
          <div className="h-10 absolute top-[668px] bg-[#80E9FF] registerAndLoginBg-firstLeftStripe" />
          <div className="h-10 absolute top-[698px] -left-[10px] bg-[#7A73FF] registerAndLoginBg-secondLeftStripe" />
          <div className="h-[10px] absolute top-[698px] bg-[#0048E5] registerAndLoginBg-firstAndsecondLeftStripeBlend" />
          <div className="h-10 absolute top-[658px] -right-[10px] bg-[#7A73FF] registerAndLoginBg-firstRightStripe" />

          <div className="h-10 left-0 absolute top-[180px] bg-[#7A73FF] registerAndLoginBgMobile-firstLeftStripe" />
          <div className="h-10 w-[800px] absolute top-20 bg-[#7A73FF] registerAndLoginBgMobile-secondRightStripe" />
          <div className="h-10 w-[126px] absolute top-[50px] bg-[#80E9FF] registerAndLoginBgMobile-firstRightStripe" />
          <div className="h-[10px] w-[126px] absolute top-20 bg-[#0048E5] registerAndLoginBgMobile-firstAndSecondRightStripeBlend" />
        </div>
      </div>

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
            <form>
              <div className="flex flex-col space-y-10">
                <div>
                  <label
                    htmlFor="registerFnameInput"
                    className="block mb-1 text-sm text-[#1A1F36] font-semibold cursor-pointer"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="registerFnameInput"
                    //   value=""
                    className="px-3 py-2 w-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
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
                    name="lName"
                    id="registerLnameInput"
                    //   value=""
                    className="px-3 py-2 w-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
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
                    //   value=""
                    className="px-3 py-2 w-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
                  />
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
                      type="password"
                      name="password"
                      id="registerPasswordInput"
                      // value=""
                      className="px-3 py-2 mb-3 w-full text-[#1A1F36] text-sm rounded-md outline-none border focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
                    />
                    <div className="hidden absolute top-1/2 right-3 -translate-y-[80%] cursor-pointer">
                      <img
                        src={eyeOutlineIcon}
                        alt="show and hide password"
                        className="size-5"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="block mb-3 text-xs text-[#3C4257] text-transparent">
                      Your password needs to be at least 10 characters. Include
                      multiple words and phrases to make it more secure.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-1 mb-7">
                <input
                  type="checkbox"
                  name="privacyCheck"
                  // value=""
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
                disabled
                className="py-3 mb-7 w-full text-white bg-[#b2AEFF] rounded-lg outline-none focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
              >
                Create account
              </button>
              <div className="text-sm text-center">
                <span className="text-[#3C4257]">Have an account?</span>
                <a
                  href=""
                  className="ml-1 text-[#635BFF] outline-none focus:rounded-md focus:shadow-[0px_0px_0px_3px_rgba(58,151,212,0.36)]"
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

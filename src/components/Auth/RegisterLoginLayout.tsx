const RegisterLoginLayout = () => {
  return (
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
  );
};

export default RegisterLoginLayout;

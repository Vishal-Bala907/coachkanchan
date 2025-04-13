"use client";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import EmailOTPInput from "./EmaillOTPInput";
import React, { useEffect, useState } from "react";
import BreadCrumb from "@/components/common/BreadCrumb";
import VerifyOtp from "./VerifyOtp";
import { toast } from "react-toastify";
import ResetPassword from "./ResetPassword";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  useEffect(() => {
    const user = localStorage.getItem("kanchan-user");
    if (user) {
      const USER = JSON.parse(user);
      setEmail(USER.email);
    }
  }, []);

  const sendOTP = async (email: string) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      toast.warning("Please enter a valid email address.");
      return;
    }
    setStep(2);
    console.log(email);
  };

  const handleVerify = (otp: any) => {
    const finalOtp = otp.join("");
    if (finalOtp.length === 5) {
      // onVerify(finalOtp);
      console.log(finalOtp);
      setStep(3);
    } else {
      alert("Please enter a 5-digit OTP.");
    }
  };

  return (
    <div>
      <HeaderOne headerTop={false} />
      {/* sdfouhdfu */}
      <BreadCrumb title="Forget Password" />
      {step === 1 && <EmailOTPInput Email={email} onSendOTP={sendOTP} />}
      {step === 2 && <VerifyOtp email={email} handleVerify={handleVerify} />}
      {step === 3 && <ResetPassword />}

      <FooterOne />
    </div>
  );
};

export default ForgetPassword;

import React, { useState, useRef } from "react";
import "./OTPVerification.css";

type Props = {
  email: string;
  handleVerify: (otp: any) => void;
};

const OTPVerification: React.FC<Props> = ({ email, handleVerify }) => {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-container mb-5">
      <p>
        We have sent an OTP to <b> {email}</b>
      </p>
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => {
              if (el) inputsRef.current[index] = el;
            }}
            style={{
              color: "black",
            }}
          />
        ))}
      </div>
      <button className="verify-btn" onClick={() => handleVerify(otp)}>
        Verify OTP
      </button>
    </div>
  );
};

export default OTPVerification;

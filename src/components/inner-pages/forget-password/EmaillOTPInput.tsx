import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

type Props = {
  Email: string;
  onSendOTP: (email: string) => {};
};

const EmailOTPInput: React.FC<Props> = ({ Email, onSendOTP }) => {
  const [email, setEmail] = useState(Email);

  const handleSendOTP = () => {
    if (onSendOTP) {
      onSendOTP(email);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "column" }}
      alignItems="center"
      gap={2}
      p={2}
      width="100%"
      maxWidth={400}
      mx="auto"
    >
      <div className="w-full">
        <p className="text-left">Enter Your Email</p>
      </div>
      <input
        // fullWidth
        type="email"
        // variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          color: "black",
          width: "100%",
          height: "40px",
          border: "1px solid white",
          borderRadius: "5px",
          outline: "white",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendOTP}
        disabled={!email}
      >
        Send OTP
      </Button>
    </Box>
  );
};

export default EmailOTPInput;

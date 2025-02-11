"use client";
import React, { useEffect, useRef, useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import style from "./loginpage.module.css";
import Typed from "typed.js";
import { useRouter } from "next/navigation";
import { registerUser } from "../server/auth/auth";
import { toast } from "react-toastify";

type ValidationError = {
  location: "body" | "query" | "params" | "headers"; // Common locations for validation
  msg: string; // Error message
  path: string; // The field that caused the error
  type: "field" | "other"; // Type of error
  value?: string; // The invalid value (optional)
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const SignupPage: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const el = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Create Your Account"],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "🖊",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // const router = useRouter
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    registerUser({ email, phone: mobile, password, name })
      .then((data) => {
        console.log(data);
        toast.success("sign up success");
        router.push("/login");
      })
      .catch((err) => {
        // console.log(err.response.data.message[0]);
        const errorArray = err.response.data.message;
        if (errorArray) {
          errorArray[0].length > 0 &&
            errorArray[0].forEach((error: ValidationError) => {
              toast.error(`sign up failed ${error.msg}`);
            });
        }
      });
  };

  return (
    <>
      <HeaderOne headerTop={true} />
      <ThemeProvider theme={darkTheme}>
        <Box className={`${style.lsContainer}`}>
          <Paper
            elevation={5}
            className="p-8 w-96 rounded-lg shadow-lg"
            sx={{ padding: "20px 0px" }}
          >
            <span className={`${style.lspara}`} ref={el} />
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                sx={{
                  margin: "20px 10%",
                  width: "80%",
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  margin: "20px 10%",
                  width: "80%",
                }}
              />
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{
                  margin: "20px 10%",
                  width: "80%",
                }}
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{
                  margin: "20px 10%",
                  width: "80%",
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="success"
                type="submit"
                sx={{
                  margin: "20px 20%",
                  width: "60%",
                }}
              >
                Sign Up
              </Button>
            </form>
            <p style={{ textAlign: "center" }}>
              Already have an account?{" "}
              <b
                style={{ color: "#ffe000", cursor: "pointer" }}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </b>
            </p>
          </Paper>
        </Box>
      </ThemeProvider>
      <FooterOne />
    </>
  );
};

export default SignupPage;

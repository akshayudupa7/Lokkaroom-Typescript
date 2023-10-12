"use client";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { AnyARecord } from "dns";
import Image from "next/image";
export default function FormValidation() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmptyError, setIsEmptyError] = useState(false);
  const [isInvalidFormatError, setIsInvalidFormatError] = useState(false);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    setError(false);
  };

  const handleFocus = () => {
    if (inputValue.trim() === "") {
      setError(true);
    }
  };
  const handleEmailFocus = () => {
    if (email.trim() === "") {
      setIsEmptyError(true);
    } else {
      const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
      if (!emailPattern.test(email)) {
        setIsEmptyError(false);
        setIsInvalidFormatError(true);
      } else {
        setIsEmptyError(false);
        setIsInvalidFormatError(false);
      }
    }
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);

    if (email.trim() === "") {
      setIsEmptyError(true);
    } else {
      const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
      if (!emailPattern.test(email)) {
        setIsEmptyError(false);
        setIsInvalidFormatError(true);
      } else {
        setIsEmptyError(false);
        setIsInvalidFormatError(false);
      }
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      setError(true);
    } else if (inputValue.trim() !== "") {
      alert("Form submitted successfully");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(18, 18, 18)",
        paddingBottom:10
      }}
    >
      <Typography variant="h5" sx={{ color: "#BEBEBE" }}>
        Contact Lokkaroom
      </Typography>

      <form onSubmit={handleSubmit}>
        <Typography
          variant="body1"
          sx={{
            color: "#BEBEBE",
            fontWeight: "600",
            marginTop: 4,
            marginBottom: 1,
          }}
        >
          Enter your email
        </Typography>
        <TextField
          id="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          error={isEmptyError || isInvalidFormatError}
          sx={{
            display: "block",
            "& .MuiOutlinedInput-root": {
              maxHeight: "50px",
              width: "50vw",
              backgroundColor: "#2A2A2A",
            },
            "& fieldset": {
              border: () =>
                isEmptyError || isInvalidFormatError
                  ? "1px solid red !important"
                  : "1px solid #FEFEFE !important",
            },
            "& .MuiInputBase-input":{
                '&::placeholder':{color:"#fff !Important"}
            }
          }}
          InputProps={{
           sx: { color: "#FFF !Important"},
          }}
          helperText={
            isEmptyError
              ? "This field is required"
              : isInvalidFormatError
              ? "Please enter a valid email address"
              : ""
          }
        />
        <Typography
          variant="body1"
          sx={{
            color: "#BEBEBE",
            fontWeight: "600",
            marginTop: 4,
            marginBottom: 1,
          }}
        >
          How can we help you?
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Type your question here"
          sx={{
            display: "block",
            "& .MuiOutlinedInput-root": {
              minHeight: "100px",
              width: "50vw",
              backgroundColor: "#2A2A2A",
            },
            "& fieldset": {
              border: () =>
                error
                  ? "1px solid red !important"
                  : "1px solid #FEFEFE !important",
            },
            "& .MuiInputBase-input":{
                '&::placeholder':{color:"#fff !Important",marginTop:0}
            }
          }}
          InputProps={{
            style: { color: "#FEFEFE !Important" },
          }}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          error={error}
          helperText={error ? "Please, type your question" : ""}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            height: 50,
            marginTop: 6,
            backgroundColor: "#F8BB5A",
            color: "#000",
            borderRadius: 0,
            "&:hover": { backgroundColor: "#F3990A" },
          }}
        >
          Send
        </Button>
      </form>
      <Stack
        direction="row"
        spacing={4}
        sx={{ backgroundColor: "#312E2E", padding: "10px 10px", marginTop: 4 }}
      >
        <Box>
          <Image
            src="/web.svg"
            width={30}
            height={30}
            alt="this is image"
            style={{ backgroundColor: "#fff" }}
          />
        </Box>
        <Box>
          <Image
            src="/facebook.svg"
            width={30}
            height={30}
            alt="this is image"
          />
        </Box>
        <Box>
          <Image
            src="/twitter.svg"
            width={30}
            height={30}
            alt="this is image"
          />
        </Box>
        <Box>
          <Image src="/insta.svg" width={30} height={30} alt="this is image" />
        </Box>
        <Box>
          <Image
            src="/linkdin.svg"
            width={30}
            height={30}
            alt="this is image"
            style={{ backgroundColor: "#fff" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

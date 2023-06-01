import styles from "../scss/Contact.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContactButton from "./UI/ContactButton";
import Header from "./UI/Header";
import { useRef } from "react";
import { animated, useInView } from 'react-spring'

const Contact = () => {
  const ref = useRef(null);

  const [ref1, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
  )

  return (
    <div className={styles.contactwrapper}>
      <div ref={ref} id="contactsection" className={styles.contact}>
        <animated.div ref={ref1} style={springs} className={styles.header}>
          <p className={styles.title}>Contact</p>
          <p className={styles.text}>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </animated.div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate={false}
          autoComplete="off"
          action="https://formsubmit.co/sebastiandominiak92@gmail.com"
          method="POST"
          className={styles.form}
        >
          <TextField
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              "& .MuiFormLabel-root": {
                color: "#D9D9D9",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#888888",
                  transition: "all 0.1s linear",
                },
              },
            }}
            id="outlined-basic"
            variant="outlined"
            className={styles.name}
            type="text"
            color="success"
            name="name"
            label="NAME"
            required
          />
          <TextField
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              "& .MuiFormLabel-root": {
                color: "#D9D9D9",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#888888",
                  transition: "all 0.1s linear",
                },
              },
            }}
            id="outlined-basic"
            variant="outlined"
            color="success"
            className={styles.email}
            type="email"
            name="email"
            label="EMAIL"
            required
          />
          <TextField
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              "& .MuiFormLabel-root": {
                color: "#D9D9D9",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#888888",
                  transition: "all 0.1s linear",
                },
              },
            }}
            multiline
            rows={5}
            color="success"
            label="MESSAGE"
            className={styles.message}
            name="message"
            required
          ></TextField>
          <ContactButton name="SEND MESSAGE" />
        </Box>
      </div>
      <div className={styles.line} />
      <Header />
    </div>
  );
};

export default Contact;

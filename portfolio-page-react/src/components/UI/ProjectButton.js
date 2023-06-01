import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import styles from "../../scss/Button.module.scss"

const theme = createTheme({
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontFamily: "Space Grotesk",
          backgroundColor: "#4EE1A0",
        },
      },
    },
  },
});
const ProjectButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
    <a href={props.text === 'code' ? props.code : props.live} target="_blank">
       <Fab variant="extended">
        {props.text === "code" ? (
          <CodeIcon sx={{ mr: 1 }} />
        ) : (
          <WebIcon sx={{ mr: 1 }} />
        )}
        {props.text}
      </Fab></a>
    </ThemeProvider>
  );
};

export default ProjectButton;

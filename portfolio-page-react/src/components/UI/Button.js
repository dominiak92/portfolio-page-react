import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import styles from "../../scss/Button.module.scss"


const theme = createTheme({
    components: {
        MuiFab: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            fontFamily: 'Space Grotesk',
            backgroundColor: '#4EE1A0'

          },
        },
      },
    },
  });
  const Button = (props) => {

    const handleClickScroll = () => {
      const element = document.getElementById('contactsection');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Fab className={styles.button} variant="extended" type="submit" onClick={handleClickScroll}>
          <SendIcon sx={{ mr: 1 }} />
          <p className={styles.button}>{props.name}</p>
        </Fab>
      </ThemeProvider>
    );
  };
  
  export default Button;
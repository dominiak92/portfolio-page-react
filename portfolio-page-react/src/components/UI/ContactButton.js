import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import { useRef } from 'react';
import { Link } from 'react-router-dom';


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
  const ContactButton = (props) => {
  
    return (
      <ThemeProvider theme={theme}>
        <Fab variant="extended" type="submit">
          <SendIcon sx={{ mr: 1 }} />
          {props.name}
        </Fab>
      </ThemeProvider>
    );
  };
  
  export default ContactButton;
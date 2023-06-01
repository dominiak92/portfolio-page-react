import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import photoOne from "../../assets/gallery/1.jpg";
import photoTwo from "../../assets/gallery/2.jpg";
import photoThree from "../../assets/gallery/3.jpg";
import photoFour from "../../assets/gallery/4.jpg";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Sometimes you have to wait a long time during rocket alarms",
    imgPath: photoOne,
  },
  {
    label: "My private space for six months, luckily i had the bed downstairs!",
    imgPath: photoTwo,
  },
  {
    label: "Occasionally, you could learn something on a mission",
    imgPath: photoThree,
  },
  {
    label: "I didn't have the best learning conditions, but it wasn't bad!",
    imgPath: photoFour,
  },
];

function Gallery() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 400,
          minWidth: 335,
          flexGrow: 1,
          borderRadius: "18px",
          boxShadow:
            "rgba(78, 225, 160, 0.3) 5px 5px, rgba(78, 225, 160, 0.2) 10px 10px, rgba(78, 225, 160, 0.1) 15px 15px, rgba(78, 225, 160, 0.05) 20px 20px, rgba(78, 225, 160, 0.02) 25px 25px;",
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            display: "flex",
            alignItems: "center",
            height: 55,
            pl: 2,
            bgcolor: "#4EE1A0",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Space Grotesk",
              color: "black",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            {images[activeStep].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 205,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                    backgroundSize: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{
            backgroundColor: "white",
            borderBottomLeftRadius: "18px",
            borderBottomRightRadius: "18px",
            "& .MuiMobileStepper-dot": {
              backgroundColor: "#D9D9D9",
            },
            "& 	.MuiMobileStepper-dotActive": {
              backgroundColor: "#4EE1A0",
            },
          }}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ fontFamily: "Space Grotesk", color: "#4EE1A0" }}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              sx={{ fontFamily: "Space Grotesk", color: "#4EE1A0" }}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
}

export default Gallery;

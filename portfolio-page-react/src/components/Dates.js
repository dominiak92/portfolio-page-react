import styles from "../scss/Dates.module.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated, useInView } from "react-spring";
import {
  faPersonRifle,
  faTruckField,
  faUserShield,
  faCode,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const Dates = () => {
  const [ref1, right] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );
  const [ref2, left] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );
  const [ref3, right2] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );
  const [ref4, left2] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );
  const [ref5, right3] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );
  const [ref6, left3] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );

  return (
    <>
      <div className={styles.dates}>
        <Timeline position="alternate">
          <animated.div ref={ref1} style={right}>
            <TimelineItem position="left">
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                color="grey"
                fontSize="15px"
                fontFamily="Space Grotesk"
              >
                2014
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="info">
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faPersonRifle}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#2e7d32" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontFamily="Space Grotesk"
                >
                  ARMY
                </Typography>
                <Typography fontFamily="Space Grotesk">
                  Joined the Polish army as a driver
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </animated.div>
          <animated.div ref={ref2} style={left}>
            <TimelineItem position="right">
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                color="grey"
                fontFamily="Space Grotesk"
                fontSize="15px"
              >
                2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#2e7d32" }} />
                <TimelineDot color="success">
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faTruckField}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#2e7d32" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontFamily="Space Grotesk"
                >
                  Afghanistan
                </Typography>
                <Typography fontFamily="Space Grotesk">MRAP Driver</Typography>
              </TimelineContent>
            </TimelineItem>
          </animated.div>
          <animated.div ref={ref3} style={right2}>
            <TimelineItem position="left">
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                fontSize="15px"
                color="grey"
                fontFamily="Space Grotesk"
              >
                2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#2e7d32" }} />
                <TimelineDot color="success">
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faUserShield}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#2e7d32" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontFamily="Space Grotesk"
                >
                  Iraq
                </Typography>
                <Typography fontFamily="Space Grotesk">
                  Armored vehicle driver and VIP personal protection
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </animated.div>
          <animated.div ref={ref4} style={left2}>
            <TimelineItem position="right">
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                fontSize="15px"
                color="grey"
                fontFamily="Space Grotesk"
              >
                08.2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#2e7d32" }} />
                <TimelineDot color="primary" variant="outlined">
                  <FontAwesomeIcon className={styles.icon} icon={faCode} />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#1976d2" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontFamily="Space Grotesk"
                >
                  Coding
                </Typography>
                <Typography fontFamily="Space Grotesk">
                  While deployed in Iraq, I met my first 'div'
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </animated.div>
          <animated.div ref={ref5} style={right3}>
            <TimelineItem position="left">
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#1976d2" }} />
                <TimelineDot color="primary" variant="filled">
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faGraduationCap}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#1976d2" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  fontFamily="Space Grotesk"
                  variant="h6"
                  component="span"
                >
                  Improving
                </Typography>
                <Typography fontFamily="Space Grotesk">
                  Day after day I constantly try to improve my skills.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </animated.div>
          <animated.div ref={ref6} style={left3}>
            <TimelineItem position="right">
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#1976d2" }} />
                <TimelineDot color="error">
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLaptopCode}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  fontFamily="Space Grotesk"
                >
                  Time for change
                </Typography>
                <Typography fontFamily="Space Grotesk">
                  Looking for new challenges in my life
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </animated.div>
        </Timeline>
      </div>
    </>
  );
};

export default Dates;

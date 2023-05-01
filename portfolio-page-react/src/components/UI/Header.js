import styles from "../../scss/Header.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.name}>
        {`<sebastian`}
        <span className={styles.lastname}>{`dominiak`}</span>
        {`/>`}
      </p>
      <div className={styles.icons}>
        <a
          href="https://github.com/dominiak92"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com/dominiak.s/"
          rel="noreferrer"
          target="_blank"
        >
          <FacebookIcon className={styles.icon} />
        </a>
        <a
          href="mailto:sebastiandominiak92@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <EmailIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Header;

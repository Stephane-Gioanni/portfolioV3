import styles from "./footer.module.css";

export default function Footer({ setAboutMe }) {
  return (
    <div className={styles.footer}>
      <nav>
        <li
          onClick={() => {
            setAboutMe(true);
          }}
        >
          AboutMe
        </li>

        <li>SelectedWork</li>
        <li>Contact&Socials</li>
      </nav>
    </div>
  );
}

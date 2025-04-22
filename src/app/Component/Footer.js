import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer({ setAboutMe }) {
  return (
    <div className={styles.footer}>
      <nav>
        <div className={styles.liFooter}>
          <Link href="/aboutme">
            <li>AboutMe</li>
          </Link>
        </div>

        <div className={styles.liFooter}>
          <Link href="/iveworkedwith">
            <li>IveWorkedWith</li>
          </Link>
        </div>

        <div className={styles.liFooter}>
          <Link href="/selectedwork">
            <li>SelectedWork</li>
          </Link>
        </div>
      </nav>
    </div>
  );
}

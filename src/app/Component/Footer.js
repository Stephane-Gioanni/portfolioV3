import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer({ setAboutMe }) {
  return (
    <div className={styles.footer}>
      <nav>
        <Link href="/aboutme">
          <li>AboutMe</li>
        </Link>
        <Link href="/iveworkedwith">
          <li>IveWorkedWith</li>
        </Link>
        <Link href="/selectedwork">
          <li>SelectedWork</li>
        </Link>
      </nav>
    </div>
  );
}

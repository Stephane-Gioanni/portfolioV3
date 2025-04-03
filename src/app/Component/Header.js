import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/">
          {" "}
          <span className={styles.pageTitle}>Stephane G.</span>
        </Link>
      </div>
      <div className={styles.headerRight}>
        <Link href="/contact">
          <span className={styles.letsconnect}>ContactMe</span>{" "}
        </Link>
      </div>
    </div>
  );
}

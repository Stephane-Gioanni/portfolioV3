import Image from "next/image";
import styles from "./frame.module.css";
import Link from "next/link";

export default function Mozillaframe1() {
  return (
    <div className={styles.main}>
      <Image
        src="/frame111.jpg"
        alt="Heuristic analysis"
        fill
        className={styles.image}
      ></Image>
      <Link href="/selectedwork">
        <span className={styles.fermer}>Close</span>
      </Link>
    </div>
  );
}

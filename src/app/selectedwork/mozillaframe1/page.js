import Image from "next/image";
import styles from "./frame.module.css";
import Link from "next/link";

export default function Mozillaframe1() {
  return (
    <div className={styles.main}>
      <span>Fermer</span>

      <Image
        src="/frame1.png"
        alt="Heuristic analysis"
        fill
        className={styles.image}
      ></Image>
      <Link href="/selectedwork">
        <span className={styles.fermer}>Fermer</span>
      </Link>
    </div>
  );
}

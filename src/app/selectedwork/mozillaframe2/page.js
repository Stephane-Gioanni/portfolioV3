import Image from "next/image";
import styles from "./frame.module.css";
import Link from "next/link";

export default function Mozillaframe2() {
  return (
    <div className={styles.main}>
      <span>Fermer</span>

      <Image
        src="/frame2.png"
        alt="Description de l'image"
        fill
        className={styles.image}
      ></Image>
      <Link href="/selectedwork">
        <span className={styles.fermer}>Fermer</span>
      </Link>
    </div>
  );
}

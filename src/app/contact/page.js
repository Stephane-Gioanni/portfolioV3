"use client";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Header></Header>

      <main className={styles.main}>
        <div id="bande" className={styles.bandeFindMe}>
          <p>Find me. Reach me.</p>
        </div>
        <section className={styles.section}>
          <p>mail</p>
          <p>tel</p>
          <p>linkedin</p>
          <p>github</p>
        </section>

        <div className={styles.footer}>
          <div id="bande" className={styles.bandeAboutme}>
            <Link href="/aboutme">
              {" "}
              <p> About me</p>
            </Link>
          </div>
          <div className={styles.bandeSelectedWork}>
            <Link href="/selectedwork">
              {" "}
              <p> SelectedWork</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

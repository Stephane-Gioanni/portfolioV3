"use client";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./contact.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [tel, setTel] = useState(false);
  return (
    <div className={styles.page}>
      <Header></Header>

      <main className={styles.main}>
        <div id="bande" className={styles.bandeFindMe}>
          <p>Find me. Reach me.</p>
        </div>
        <section className={styles.section}>
          <li className={styles.liSection}>
            <a href="mailto:stephane.gioanni@gmail.com?">mail</a>
          </li>
          {tel ? (
            <li
              onClick={() => {
                setTel(false);
              }}
              className={styles.tel}
            >
              +33660545039
            </li>
          ) : (
            <li
              className={styles.liSection}
              onClick={() => {
                setTel(true);
              }}
            >
              tel
            </li>
          )}

          <li className={styles.liSection}>
            <a
              href="https://www.linkedin.com/in/stephane--g/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>

          <li className={styles.liSection}>
            <a
              href="https://github.com/Stephane-Gioanni"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
        </section>

        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <nav>
              <Link href="/aboutme">
                <li> About me</li>
              </Link>
              <Link href="/iveworkedwith">
                <li> IveWorkedWith</li>
              </Link>
              <Link href="/selectedwork">
                <li> SelectedWork</li>
              </Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

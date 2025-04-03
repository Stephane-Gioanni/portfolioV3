"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Link from "next/link";
import { useState } from "react";
import SnakeGame from "./Component/SnakeGame";

export default function Home() {
  const [tel, setTel] = useState(false);

  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <p id="heroIntro" className={styles.heroIntro}>
              <span>
                I craft <span className={styles.experience}>experiences</span>{" "}
              </span>
              <span>
                {" "}
                for your <span className={styles.ears}>ears</span>
              </span>
              <span>
                {" "}
                for your <span className={styles.eyes}>eyes</span>
              </span>
              <span>
                {" "}
                And your <span className={styles.mind}>mind</span>.
              </span>
            </p>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.imagesWrapper}>
              <div className={styles.imageContainer}>
                <Image
                  src="/tel2.jpg"
                  alt="Description de l'image"
                  className={styles.image}
                  fill
                />
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/tel1.jpg"
                  alt="Description de l'image"
                  className={styles.image}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}

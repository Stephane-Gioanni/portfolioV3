"use client";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./selectedwork.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Selectedwork() {
  return (
    <div className={styles.page}>
      <Header></Header>

      <main className={styles.main}>
        <div id="bande" className={styles.bandeSelectedWork}>
          <p>SelectedWork</p>
        </div>
        <section className={styles.workCards}>
          <div className={styles.workCard}>
            <div className={styles.workCardTop}>
              <p>We are BMF</p>
              <span className={styles.wordCardLocation}>Cannes Lions</span>
              <span className={styles.design}>Sound design</span>
            </div>

            <div className={styles.wordCardImage}>
              {" "}
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/4kGr7J12cqqm8f8oqHEprS?utm_source=generator&theme=0"
                width="100%"
                height="360"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; allowFullScreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className={styles.workCard}>
            <div className={styles.workCardTop}>
              <p>Northlamb records</p>
              <Link href="http://northlamb.club">
                <span className={styles.wordCardLink}>northlamb.club</span>
              </Link>
              <span className={styles.design}>Web design</span>
            </div>

            <div className={styles.wordCardImage}>
              <Image
                src="/northlamb.png"
                alt="Description de l'image"
                width={600}
                height={360}
                className={styles.wordCardImage}
              ></Image>
            </div>
          </div>
          <div className={styles.workCard}>
            <div className={styles.workCardTop}>
              <p>Epoche </p>
              <Link href="http://epocheberlin.de">
                <span className={styles.wordCardLink}>www.epocheberlin.de</span>
              </Link>
              <span className={styles.design}>Web design</span>
            </div>

            <div className={styles.wordCardImage}>
              <Image
                src="/epoche.png"
                alt="Description de l'image"
                width={600}
                height={360}
                className={styles.wordCardImage}
              ></Image>
            </div>
          </div>{" "}
          <div className={styles.workCard}>
            <div className={styles.workCardTop}>
              <p>Variety & Golden Globes</p>

              <span className={styles.wordCardLocation}>
                Cannes Film Festival
              </span>

              <span className={styles.design}>Sound design</span>
            </div>

            <div className={styles.wordCardImage}>
              <Image
                src="/variety.png"
                alt="Myself performing for Variety"
                width={600}
                height={360}
                className={styles.wordCardImage}
              ></Image>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.footer}>
        <Link href="/aboutme">
          <div className={styles.bandeAboutme}>
            <p> AboutMe</p>
          </div>
        </Link>
        <Link href="/iveworkedwith">
          <div id="bande" className={styles.bandeContact}>
            <p>IveWorkedWith</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

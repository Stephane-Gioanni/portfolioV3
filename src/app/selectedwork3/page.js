"use client";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./selectedwork.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Selectedwork3() {
  return (
    <div className={styles.page}>
      <Header></Header>

      <main className={styles.main}>
        <div id="bande" className={styles.bandeSelectedWork}>
          <p>SelectedWork</p>
        </div>
        <section className={styles.workCards}>
          <div className={styles.workCardLeft}>
            <div className={styles.workCardMozilla}>
              <div className={styles.workCardTop}>
                <p>Mozilla Firefox</p>
                <Link href="https://www.figma.com/proto/CnwGdVa1c7dHqIbts98rv3/%5B-P3-%5D-App-Redesign---Stephane?page-id=3006%3A2&node-id=5047-2204&viewport=-4396%2C4434%2C1&t=6bao2fFv4bNyf5yv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5047%3A2204">
                  <span className={styles.wordCardLink}>
                    Figma prototype here
                  </span>
                </Link>
                <span className={styles.design}>
                  UI/UX design (Open-source app redesign) - 2025
                </span>
              </div>

              <div className={styles.wordCardImage}>
                <Image
                  src="/mozilla.png"
                  alt="Description de l'image"
                  width={600}
                  height={360}
                  className={styles.wordCardImageMozilla}
                ></Image>
              </div>
              <Link href="/selectedwork/mozillaframe1">
                <div className={styles.wordCardImage}>
                  <Image
                    src="/frame111.jpg"
                    alt="Heuristic analysis"
                    width={600}
                    height={360}
                    className={styles.wordCardImageMozilla}
                  ></Image>
                </div>
              </Link>
              <Link href="/selectedwork/mozillaframe2">
                <div className={styles.wordCardImage}>
                  <Image
                    src="/frame112.jpg"
                    alt="Prototype design"
                    width={600}
                    height={360}
                    className={styles.wordCardImageMozilla}
                  ></Image>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.workCard}>
              <div className={styles.workCardTop}>
                <p>We are BMF</p>
                <span className={styles.wordCardLocation}>Cannes Lions</span>
                <span className={styles.design}>Sound design - 2023</span>
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
                <span className={styles.design}>Web design - 2024</span>
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
                  <span className={styles.wordCardLink}>
                    www.epocheberlin.de
                  </span>
                </Link>
                <span className={styles.design}>Web design - 2024</span>
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

                <span className={styles.design}>
                  Sound design - 2022 / 2023 / 2024
                </span>
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
          </div>
        </section>
      </main>
      <div className={styles.footer}>
        <nav>
          <Link href="/aboutme">
            <li> AboutMe</li>
          </Link>
          <Link href="/iveworkedwith">
            <li>IveWorkedWith</li>
          </Link>
        </nav>
      </div>
    </div>
  );
}

/*
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
      */

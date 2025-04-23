"use client";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./iveworkedwith.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Iveworkedwith() {
  return (
    <div className={styles.page}>
      <Header></Header>

      <main className={styles.main}>
        <div id="bande" className={styles.bandeSelectedWork}>
          <p>IveWorkedWith</p>
        </div>

        <section className={styles.mainContent}>
          <div className={styles.workWithList}>
            <li>
              Golden Globes <span>(US)</span>
            </li>
            <li>
              Variety <span>(US)</span>{" "}
            </li>
            <li>
              Mama Shelter <span>(UK)</span>
            </li>

            <li>
              Hotel Costes <span>(FR)</span>
            </li>
            <li>
              Innovision events
              <span>(UK)</span>
            </li>
            <li>
              Experimental group <span>(FR)</span>
            </li>
            <li>
              We are BMF <span>(UK)</span>{" "}
            </li>
            <li>
              Maison Serieuse <span>(FR)</span>
            </li>
            <li>
              YoungDogs <span>(NL)</span>
            </li>

            <li>
              Groupe Barrière <span>(FR)</span>
            </li>
            <li>
              Stockfish <span> (FR)</span>
            </li>
            <li>
              Epoche <span>(GER)</span>
            </li>
            <li>
              Groupe Beaumarly <span>(FR)</span>
            </li>
            <li>
              Le Perchoir Group <span>(FR)</span>
            </li>
            <li>
              Chez Elles <span>(UK)</span>
            </li>
            <li>
              Rhrude <span>(ES)</span>
            </li>
            <li>
              Baoli Group <span>(FR)</span>
            </li>
            <li>
              Northlamb Records <span>(FR)</span>
            </li>
            <li>
              DB Group <span>(FR)</span>
            </li>
            <li>
              Pierre Augustin Rose <span>(FR)</span>
            </li>
            <li>
              Must Group <span>(FR)</span>
            </li>
            <li>and more..</li>
          </div>
          <div className={styles.mainRight}>
            <div className={styles.footer}>
              <nav>
                <div className={styles.contact}>
                  <div className={styles.liFooter}>
                    <Link href="/contact">
                      <li>Contact</li>
                    </Link>
                  </div>
                </div>
                <div className={styles.liFooter}>
                  <Link href="/aboutme">
                    <li>AboutMe</li>
                  </Link>
                </div>
                <div className={styles.liFooter}>
                  <Link href="/selectedwork">
                    <li>SelectedWork</li>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/*

 <div className={styles.footer}>
        <div id="bande" className={styles.bandeAboutme}>
          <Link href="/aboutme" className={styles.bandeAboutme}>
            <div className={styles.bandeAboutme}>
              <p> AboutMe</p>
            </div>
          </Link>
        </div>
        <Link href="/selectedwork" className={styles.bandeContact}>
          <div className={styles.bandeContact}>
            <p> SelectedWork</p>
          </div>
        </Link>
      </div>*/

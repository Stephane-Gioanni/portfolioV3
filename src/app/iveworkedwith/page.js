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
        <section className={styles.workWithList}>
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
            Barriere <span>(FR)</span>
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
            Rhrude <span>(SP)</span>
          </li>
          <li>
            Baoli Group <span>(FR)</span>
          </li>
          <li>
            Northlamb Records <span>(GER)</span>
          </li>
          <li>
            DB Group <span>(FR)</span>
          </li>
          <li>and more..</li>
        </section>
      </main>
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
      </div>
    </div>
  );
}

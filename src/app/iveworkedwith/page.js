"use client";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./iveworkedwith.module.css";
import Link from "next/link";
import Image from "next/image";

const partners = [
  { name: "Golden Globes", country: "US", image: "/logos/goldenglobes.png" },
  { name: "Variety", country: "US", image: "/logos/variety.png" },
  { name: "Groupe Barrière", country: "FR", image: "/logos/barriere.jpeg" },
  { name: "Mama Shelter", country: "UK", image: "/logos/mamashelter.png" },
  { name: "Hotel Costes", country: "FR", image: "/logos/costes.png" },
  { name: "Innovision events", country: "UK", image: "/logos/innovision.png" },
  { name: "Le Perchoir Group", country: "FR", image: "/logos/leperchoir.jpeg" },
  { name: "Groupe Beaumarly", country: "FR", image: "/logos/beaumarly.jpeg" },
  { name: "DB Group", country: "FR", image: "/logos/dbgroup.png" },

  { name: "We are BMF", country: "UK", image: "/logos/bmf.jpeg" },
  {
    name: "Maison Serieuse",
    country: "FR",
    image: "/logos/maisonserieuse.jpeg",
  },
  { name: "Jonge Honden", country: "NL", image: "/logos/jongehonden.png" },
  { name: "Northlamb Records", country: "FR", image: "/logos/northlamb.png" },

  {
    name: "Experimental group",
    country: "FR",
    image: "/logos/experimental.jpg",
  },

  { name: "Pierre Augustin Rose", country: "FR", image: "/logos/pierre.png" },

  { name: "Stockfish", country: "FR", image: "/logos/stockfish.png" },
  { name: "Baoli Group", country: "FR", image: "/logos/baoli.jpeg" },
  /*
  { name: "Epoche", country: "GER" },
  { name: "Chez Elles", country: "UK" },
  { name: "Rhrude", country: "ES" },
  { name: "Must Group", country: "FR" },
   */
];

export default function Iveworkedwith() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div id="bande" className={styles.bandeSelectedWork}>
          <p>IveWorkedWith</p>
        </div>

        <section className={styles.mainContent}>
          <ul className={styles.workWithList}>
            {partners.map((partner, index) => (
              <li key={index} className={styles.partnerItem}>
                {partner.image && (
                  <Image
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    width={100}
                    height={100}
                    className={styles.partnerLogo}
                  />
                )}
                <span>
                  {partner.name} ({partner.country})
                </span>
              </li>
            ))}
            <li>and more..</li>
          </ul>

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

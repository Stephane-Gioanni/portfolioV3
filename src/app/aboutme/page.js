/* eslint-disable react/no-unescaped-entities */
"use client";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./aboutme.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className={styles.page}>
      <Header></Header>

      <main className={styles.main}>
        <div id="bande" className={styles.bandeAboutme}>
          <p> About me</p>
        </div>
        <section className={styles.mainContent}>
          <div className={styles.mainContentLeft}>
            <p>
              It’s fascinating how what feels like a problem to some can be an
              opportunity for others. <br />
              <br />
              For me, solutions have always come naturally. that's why I suppose
              it’s no surprise that I became a designer. <br />
              It started first as sound designer and DJ. I’ve always encountered
              the same challenge with people. They know the atmosphere they want
              but struggle to define or create it. <br />
              <br />
              On my side, I’ve never seen this as a problem. In fact, I’ve
              always instinctively understood what needs to be done just by
              observing the venue, the crowd, and listening to the stakeholders’
              desires. <br />
              <br />
              As a designer, I’ve experienced this too. Listening and observing
              a problematic situation to craft the best solution for it. I’ve
              learned to love the problem, not the solution, enabling me to find
              the best outcome. <br />
              <br />
              And that’s exactly how I see it. I don’t see my clients challenges
              as obstacles but as opportunities to make things better. <br />
              <br />
              So, let’s make a deal: Bring me your problem, I’ll bring you a
              solution.
            </p>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.imagesWrapper}>
              <div className={styles.imageContainer}>
                <Image
                  src="/part5.jpg"
                  alt="Description de l'image"
                  className={styles.image}
                  fill
                />
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/part3.jpg"
                  alt="Description de l'image"
                  className={styles.image}
                  fill
                />
              </div>
            </div>
            <div className={styles.footer}>
              <nav>
                <Link href="/selectedwork">
                  <li> SelectedWork</li>
                </Link>
                <Link href="/iveworkedwith">
                  <li>IveWorkedWith</li>
                </Link>
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
        <div id="bande" className={styles.bandeAboutmeFooter}>
          <Link href="/selectedwork" className={styles.bandeSelectedWork}>
            <div>
              <p className={styles.footerLink}> SelectedWork</p>
            </div>
          </Link>
        </div>
        <Link href="/iveworkedwith">
          <div id="bande" className={styles.bandeContact}>
            <p className={styles.footerLink}>IveWorkedWith</p>
          </div>{" "}
        </Link>
      </div>
*/

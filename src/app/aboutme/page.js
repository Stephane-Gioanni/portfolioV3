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
        <div className={styles.imagesWrapperResponse}>
          <div className={styles.imageContainerResp}>
            <Image
              src="/part5.jpg"
              alt="Description de l'image"
              className={styles.image}
              fill
            />
          </div>
        </div>
        <section className={styles.mainContent}>
          <div className={styles.mainContentLeft}>
            <p>
              I've always been particularly sensitive to aesthetics. That deep
              satisfaction when things work in the most efficient and beautiful
              way possible, as it was meant to be. <br />
              <br />
              And people? I'm not sure why, but understanding and making them
              feel good has always been something natural for me.
              <br />
              <br />
              It all started with music: the songs I love to listen to, the
              emotion they convey, the selection process, my way of playing
              them, my ability to sense the atmosphere of a place or read a
              crowd, and how I meticulously organize my playlists.
              <br />
              <br />
              Then came the visual experience: my eyes constantly drawn to
              shapes, colors, art, furnitures, architecture, landscapes...
              <br />
              <br />
              Or in my daily routines, I've always found myself constantly
              refining processes, to optimize how things are organized.
              <br />
              <br />
              Even when facing difficult situations, I find satisfaction by
              transforming them into something positive. I've learned to find
              comfort in discomfort, to fall in love with problems rather than
              solutions.
              <br />
              <br />
              In some way, I've always tried to improve or make things
              beautiful, functional, seamless to create enjoyable experiences.
              <br />
              <br />
              Which is, in reality, the very definition of design.
              <br />
              <br />
              From there, it seemed only natural that I became sound, UI and UX
              designer.
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
                <div className={styles.contact}>
                  <div className={styles.liFooter}>
                    <Link href="/contact">
                      <li>Contact</li>
                    </Link>
                  </div>
                </div>
                <div className={styles.liFooter}>
                  <Link href="/selectedwork">
                    <li>SelectedWork</li>
                  </Link>
                </div>
                <div className={styles.liFooter}>
                  <Link href="/iveworkedwith">
                    <li>IveWorkedWith</li>
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

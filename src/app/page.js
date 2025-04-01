/* eslint-disable react/no-unescaped-entities */
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
          <p className={styles.heroIntro}>
            <span>I make experience </span>
            <span> for your ears</span>
            <span> for your eyes</span>
            <span> And your mind.</span>
          </p>
          <div id="snake" className={styles.snake}>
            <SnakeGame />
          </div>
        </div>

        <Footer></Footer>
      </main>
      <section className={styles.section}>
        <span>About me</span>
        <p>
          As a sound designer and DJ, I've always encountered the same challenge
          with people—they know the atmosphere they want but struggle to define
          or create it. <br />
          <br />
          I've never seen this as a problem. In fact, I've always instinctively
          understood what needs to be done just by observing the venue, the
          crowd, and listening to the stakeholders' desires. <br />
          <br />
          It's fascinating how what feels like a problem to some can be an
          opportunity for others. <br />
          <br />
          For me, solutions have always come naturally. I suppose it's no
          surprise that I became a designer. <br />
          <br />
          As designers, we're taught to fall in love with the problem, not the
          solution. <br />
          <br />
          And that's exactly how I see it—I don't see your challenges as
          obstacles but as opportunities to make things better. <br />
          <br />
          So, let's make a deal: You bring me the problem, I'll bring you the
          solution. Sounds like a fair trade, don't you think?
        </p>
      </section>
      <section className={styles.section}>
        <Link href="/selectedwork">
          <div>
            <span> SelectedWork</span>
          </div>
        </Link>
      </section>
      <section className={styles.section}>
        <span>Contact&Socials</span>
        <div className={styles.contacts}>
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
              className={styles.tel}
              onClick={() => {
                setTel(true);
              }}
            >
              tel
            </li>
          )}

          <Link href="https://www.linkedin.com/in/stephane--g/">
            <li className={styles.liSection}>linkedin</li>
          </Link>

          <Link href="https://github.com/Stephane-Gioanni">
            <li className={styles.liSection}>github</li>
          </Link>
        </div>
      </section>
    </div>
  );
}

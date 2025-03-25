/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Link from "next/link";

export default function Home() {
  // Création des références pour chaque section

  return (
    <div className={styles.page}>
      <Header></Header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.heroIntro}>
            I'm Stephane. <br></br>I design for your ears.<br></br>
            Your eyes.<br></br>
            And your mind
          </p>
        </div>

        <Footer></Footer>
      </main>
      <section className={styles.section}>
        <span>About me</span>
        <p>
          As a sound designer and DJ, I’ve always encountered the same challenge
          with people—they know the atmosphere they want but struggle to define
          or create it. <br />
          <br />
          I’ve never seen this as a problem. In fact, I’ve always instinctively
          understood what needs to be done just by observing the venue, the
          crowd, and listening to the stakeholders’ desires. <br />
          <br />
          It’s fascinating how what feels like a problem to some can be an
          opportunity for others. <br />
          <br />
          For me, solutions have always come naturally. I suppose it’s no
          surprise that I became a designer. <br />
          <br />
          As designers, we’re taught to fall in love with the problem, not the
          solution. <br />
          <br />
          And that’s exactly how I see it—I don’t see your challenges as
          obstacles but as opportunities to make things better. <br />
          <br />
          So, let’s make a deal: You bring me the problem, I’ll bring you the
          solution. Sounds like a fair trade, don’t you think?
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
          <li>Mail</li>
          <li>Phone</li>
          <li>Linkedin</li>
          <li>GitHub</li>
        </div>
      </section>
    </div>
  );
}

/*
<div className={styles.hero}>
          <p className={styles.heroIntro}>
            I'm Stephane. <br></br>I design for your ears.<br></br>
            Your eyes.<br></br>
            And your mind
          </p>
          
        </div>
*/

/*
 <div id="bande" className={styles.bande}>
        <p> Here to create, design & develop.</p>
      </div>
*/

/*
   <Link href="/aboutme" className={styles.bandeAboutme}>
          <div id="bande" className={styles.bandeAboutme}>
            {" "}
            <p> About me</p>
          </div>
        </Link>
        <Link href="/selectedwork" className={styles.bandeSelectedWork}>
          <div>
            {" "}
            <p className={styles.text}> SelectedWork</p>
          </div>
        </Link>
        <Link href="/iveworkedwith" className={styles.bandeContact}>
          <div id="bande" className={styles.bandeContact}>
            <p>IveWorkedWith</p>
          </div>
        </Link>

        */

"use client";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./selectedwork.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Selectedwork4() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculer la position de défilement par rapport à la timeline
      const timelineElement = document.querySelector(
        `.${styles.timelineContainer}`
      );
      if (!timelineElement) return;

      const timelineTop = timelineElement.offsetTop;
      const timelineHeight = timelineElement.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Calcul simplifié mais plus fiable pour assurer que la barre atteint 100%
      // quand l'utilisateur atteint le bas de la page

      // Position de défilement où la timeline devient visible
      const timelineStartsAt = Math.max(0, timelineTop - windowHeight);

      // Position de défilement où la timeline est complètement défilée
      // On soustrait une petite marge pour s'assurer d'atteindre 100%
      const timelineEndsAt = timelineTop + timelineHeight - windowHeight * 0.5;

      // Calculer la progression comme un pourcentage entre le début et la fin
      let progress = 0;

      if (scrollPosition >= timelineStartsAt) {
        // Distance totale à défiler pour voir toute la timeline
        const totalDistance = timelineEndsAt - timelineStartsAt;
        // Distance déjà défilée
        const scrolledDistance = scrollPosition - timelineStartsAt;

        progress = scrolledDistance / totalDistance;

        // Si on est au-delà de la fin de la timeline, forcer à 100%
        if (scrollPosition >= timelineEndsAt) {
          progress = 1;
        }

        // Limiter entre 0 et 1 pour sécurité
        progress = Math.max(0, Math.min(1, progress));
      }

      setScrollProgress(progress);

      // Debug - à enlever en production
      // console.log(`Progress: ${Math.round(progress * 100)}%, Position: ${scrollPosition}, Start: ${timelineStartsAt}, End: ${timelineEndsAt}`);
    };

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Appeler une fois au chargement pour initialiser
    handleScroll();

    // Ne pas oublier de nettoyer
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      year: 2025,
      title: "Redesign for Mozilla Firefox ",
      description: "UI/UX design",
      storytelling:
        "As part of an individual project, I worked on rebranding Mozilla Firefox to simplify the process of adding and accessing bookmarks. I conducted a competitive analysis of browsers like Safari, Chrome, and Edge, discovering that none allowed users to add bookmarks directly from the main page, which I believed was a widely used feature. My heuristic analysis led me to propose a redesign focusing on improving accessibility and user experience. The redesign involved reorganizing icons in the URL bar for visual coherence and adding two new icons: one for adding bookmarks and another for quick access. After creating a high-fidelity prototype, the feedback was positive, confirming the usefulness and uniqueness of the proposed feature.",
      tools: ["Figma", "Usability testing"],
      link: "https://www.figma.com/proto/CnwGdVa1c7dHqIbts98rv3/%5B-P3-%5D-App-Redesign---Stephane?page-id=3006%3A2&node-id=5047-2204&viewport=-4396%2C4434%2C1&t=6bao2fFv4bNyf5yv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5047%3A2204",
      linkText: "Figma prototype here",
      mainImage: "/mozilla.png",
      additionalImages: [
        {
          src: "/frame111.jpg",
          alt: "Heuristic analysis",
          link: "/selectedwork/mozillaframe1",
        },
        {
          src: "/frame112.jpg",
          alt: "Prototype design",
          link: "/selectedwork/mozillaframe2",
        },
      ],
    },
    {
      year: 2025,
      title: "Wedding planning and management with SixSeptembre",
      description: "Web Design - FR",
      storytelling:
        "As part of a personalized project for a soon-to-be-married couple, I designed and developed an exclusive full-stack web platform dedicated to their special day. Throughout the process, I worked in close collaboration with them, meticulously integrating their aesthetic preferences while reconciling their feedback with UI/UX best practices. This collaborative approach resulted in an elegant and functional solution allowing guests to access all essential information about the event through a secure password authentication system. The fully responsive interface, perfectly reflecting the visual identity chosen by the couple, offered guests the ability to confirm their attendance via an intuitive RSVP form. On the technical side, I implemented the complete architecture: customized front-end design, robust back-end development, server deployment, database creation, and API integration. An administrative functionality allowed the couple to view the list of confirmed guests in real-time and efficiently utilize this data, in accordance with their specific needs.",
      tools: [
        "NodeJS",
        "Mongoose",
        "React",
        "NextJS",
        "Javascript",
        "HTML",
        "CSS",
      ],
      link: "https://www.sixseptembre.com/",
      linkText: "sixseptembre.com",
      mainImage: "/sixseptembre.png",
    },
    {
      year: 2024,
      title:
        "Branding and Development of the Landing Page for Northlamb Records",
      description: "Web design - FR",
      storytelling:
        "For Northlamb Records, an independent French music label, I created a distinctive landing page that perfectly captures their unique identity. Working closely with the label team, I developed a minimalist yet character-filled interface, dominated by a VHS background effect and interactive elements that respond to user interaction—much like their music responds to listeners. This clean design approach allows visitors to instantly access all essential information while experiencing the label's aesthetic. The project focused exclusively on front-end development, balancing visual impact with intuitive navigation to ensure the landing page effectively conveys the essence of Northlamb's musical universe across all devices.",
      tools: ["React", "NextJS", "Javascript", "HTML", "CSS"],
      link: "http://northlamb.club",
      linkText: "northlamb.club",
      mainImage: "/northlamb.png",
    },
    {
      year: 2024,
      title: "Label’s Digital Identity of Epoche Berlin",
      description: "Web design - GER",
      storytelling:
        " Until recently, Epoche operated without any digital presence, limiting their growth potential in Berlin's competitive music scene. When they approached me to design their first-ever website, I took on this pivotal project with a clear focus on their specific needs.  Working closely with the label owner and their graphic designer, I created a digital experience that authentically captured Epoche's distinctive artistic vision. Through collaborative sessions, I developed a streamlined site structure showcasing their upcoming events, resident artist profiles, and contact information—exactly what they needed to establish their online presence. The responsive interface features intuitive navigation and clear visual hierarchy while preserving the label's underground aesthetic. Through regular design reviews, I ensured the final product perfectly balanced their artistic vision with usability best practices, providing Epoche with the digital foundation needed to amplify their presence in Berlin's electronic music landscape.",
      tools: ["React", "NextJS", "Javascript", "HTML", "CSS"],
      link: "http://epocheberlin.de",
      linkText: "www.epocheberlin.de",
      mainImage: "/epoche.png",
    },
    {
      year: 2023,
      title: "Curated Sound Experience for BMF at Cannes Lions",
      description: "Sound design - Cannes Lions - UK & FR",
      storytelling:
        "For the Cannes Lions International Festival of Creativity, I managed the complete sound design for BMF's innovative yacht-based exhibition space. Working with this unique venue required creating a distinctive sonic identity that would enhance the brand experience both on-site and beyond. I developed curated playlists that perfectly balanced ambient atmosphere with engaging energy, reflecting BMF's brand personality while complementing the sophisticated yacht environment. These playlists were not only diffused throughout the vessel during the event but also made accessible to visitors via QR codes, extending the brand experience beyond the physical space. Additionally, I performed daily as a DJ, adapting my sets to different moments and audiences throughout the festival while maintaining brand consistency. This comprehensive audio approach helped transform BMF's yacht into one of the most memorable and immersive brand spaces at the prestigious Cannes Lions Festival, creating a multisensory experience that reinforced their creative positioning.",
      tools: ["Spotify", "Artistic Direction"],
      embed:
        "https://open.spotify.com/embed/playlist/4kGr7J12cqqm8f8oqHEprS?utm_source=generator&theme=0",
    },
    {
      year: "2022-2023-2024",
      title:
        "DJ and Musical Consultant for the Golden Globes and Variety at Cannes Film Festival",
      description: "Sound design - Cannes Film Festival - US & FR",
      storytelling:
        "Since 2022, I've served as both DJ and technical/musical consultant for the prestigious Golden Globes Awards at the Cannes Film Festival, organized by Variety magazine. This high-profile engagement requires exceptional attention to detail as I craft the atmosphere for an exclusive audience of industry executives, renowned filmmakers, and famous actors. My approach combines technical precision with artistic sensibility, creating a seamless and festive audio experience that enhances the ceremony's prestige while maintaining the sophisticated ambiance expected by attendees. The organizers have recognized the quality of my work, as evidenced by their decision to renew my contract annually for this flagship industry event. Successfully meeting the standards of such a distinguished gathering demonstrates my ability to deliver premium experiences for elite clientele. This continued partnership with one of the film industry's most celebrated ceremonies reflects the consistent value I bring to high-stakes, luxury events where impeccable execution is essential.",
      tools: ["Artistic direction"],
      mainImage: "/variety.png",
    },
  ];

  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <div id="bande" className={styles.bandeSelectedWork}>
          <p>SelectedWork</p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>

          {/* Ajout du trait rouge de progression avec un marqueur blanc horizontal */}
          <div
            className={styles.timelineProgress}
            style={{ height: `${scrollProgress * 100}%` }}
          >
            <div className={styles.timelineProgressMarker}></div>
          </div>

          <div className={styles.timelineItems}>
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              const isMultiYear =
                project.year && project.year.toString().includes("-");
              const isLastProject = index === projects.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={
                    isLeft ? styles.timelineItemLeft : styles.timelineItemRight
                  }
                >
                  <div
                    className={
                      isLeft
                        ? styles.timelineContentLeft
                        : styles.timelineContentRight
                    }
                  >
                    {isMultiYear ? (
                      <span
                        className={`${
                          isLeft
                            ? styles.timelineYearLeft
                            : styles.timelineYearRight
                        } ${styles.yearMultiLine}`}
                      >
                        {project.year
                          .toString()
                          .split("-")
                          .map((year, i) => (
                            <span key={i}>{year}</span>
                          ))}
                      </span>
                    ) : (
                      <span
                        className={
                          isLeft
                            ? styles.timelineYearLeft
                            : styles.timelineYearRight
                        }
                      >
                        {project.year}
                      </span>
                    )}
                    <h3 className={styles.timelineTitle}>{project.title}</h3>
                    <p className={styles.timelineDescription}>
                      {project.description}
                    </p>

                    {/* Project storytelling paragraph */}
                    {project.storytelling && (
                      <p className={styles.timelineStorytelling}>
                        {project.storytelling}
                      </p>
                    )}

                    {/* Affichage des outils et technologies */}
                    {project.tools && project.tools.length > 0 && (
                      <div className={styles.timelineTools}>
                        <p className={styles.timelineToolsTitle}>
                          Tools, Technologies or Mission details:
                        </p>
                        <p className={styles.timelineToolsList}>
                          {project.tools.join(" • ")}
                        </p>
                      </div>
                    )}

                    {project.link && (
                      <Link href={project.link} className={styles.timelineLink}>
                        {project.linkText || "En savoir plus"}
                      </Link>
                    )}
                    {project.mainImage && (
                      <div className={styles.timelineImageContainer}>
                        <Image
                          src={project.mainImage}
                          alt={project.title}
                          width={600}
                          height={360}
                          className={styles.timelineImage}
                        />
                      </div>
                    )}
                    {project.additionalImages &&
                      project.additionalImages.map((img, imgIndex) => (
                        <Link key={imgIndex} href={img.link || "#"}>
                          <div className={styles.timelineImageContainer}>
                            <Image
                              src={img.src}
                              alt={img.alt || project.title}
                              width={600}
                              height={360}
                              className={styles.timelineImage}
                            />
                          </div>
                        </Link>
                      ))}
                    {project.embed && (
                      <div className={styles.timelineImageContainer}>
                        <iframe
                          style={{ borderRadius: "12px" }}
                          src={project.embed}
                          width="100%"
                          height="360"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                          loading="lazy"
                        ></iframe>
                      </div>
                    )}
                    {!isLastProject && (
                      <div
                        className={
                          isLeft
                            ? styles.timelineDotLeft
                            : styles.timelineDotRight
                        }
                      ></div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <nav>
            <Link href="/aboutme">
              <li> About me</li>
            </Link>
            <Link href="/iveworkedwith">
              <li> IveWorkedWith</li>
            </Link>
            <li className={styles.contact}>
              <Link href="/contact">ContactMe</Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}

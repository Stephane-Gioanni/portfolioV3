"use client";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import styles from "./selectedwork.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Selectedwork4() {
  const projects = [
    {
      year: 2025,
      title: "Mozilla Firefox",
      description: "UI/UX design (Open-source app redesign)",
      tools: ["Figma", "Adobe XD", "Sketch", "Usability testing"],
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
      year: 2024,
      title: "Northlamb Records",
      description: "Sound design",
      tools: ["Ableton Live", "Max/MSP", "ProTools", "Analog synthesizers"],
      link: "http://northlamb.club",
      linkText: "northlamb.club",
      mainImage: "/northlamb.png",
    },
    {
      year: 2024,
      title: "Epoche Berlin",
      description: "Web design",
      tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      link: "http://epocheberlin.de",
      linkText: "www.epocheberlin.de",
      mainImage: "/epoche.png",
    },
    {
      year: 2023,
      title: "We are BMF",
      description: "Sound design - Cannes Lions",
      tools: [
        "Logic Pro",
        "Waves plugins",
        "Soundtoys",
        "MOTU audio interface",
      ],
      embed:
        "https://open.spotify.com/embed/playlist/4kGr7J12cqqm8f8oqHEprS?utm_source=generator&theme=0",
    },
    {
      year: "2022-2024",
      title: "Variety & Golden Globes",
      description: "Sound design - Cannes Film Festival",
      tools: [
        "ProTools",
        "Native Instruments",
        "Spitfire Audio",
        "Universal Audio plugins",
      ],
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

                    {/* Affichage des outils et technologies */}
                    {project.tools && project.tools.length > 0 && (
                      <div className={styles.timelineTools}>
                        <p className={styles.timelineToolsTitle}>
                          Tools & Technologies:
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

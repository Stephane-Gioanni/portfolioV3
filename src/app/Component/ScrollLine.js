"use client";
import { useEffect, useState } from "react";
import styles from "../selectedwork/selectedwork.module.css";

export default function ScrollLine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    // Calculer la hauteur maximale de défilement
    const calculateMaxScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      setMaxScroll(scrollHeight - clientHeight);
    };

    // Gérer le défilement
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Calculer la progression du défilement (0 à 1)
      const progress = Math.min(currentPosition / maxScroll, 1);

      // Inverser pour que la ligne se remplisse de bas en haut
      // 1 signifie complètement invisible (100% clippé), 0 signifie complètement visible
      setScrollProgress(1 - progress);
    };

    // Initialiser
    calculateMaxScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateMaxScroll);
    handleScroll(); // Appel initial pour définir la position correcte

    // Nettoyer les event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateMaxScroll);
    };
  }, [maxScroll]);

  // Calculer le pourcentage de découpage du bas
  const clipBottom = `${scrollProgress * 100}%`;

  return (
    <div
      className={styles.scrollLine}
      style={{ "--clip-bottom": clipBottom }}
    />
  );
}

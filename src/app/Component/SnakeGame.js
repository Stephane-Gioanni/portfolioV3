/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./SnakeGame.module.css";
import Link from "next/link";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const initialCanvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Fonction pour dessiner l'écran initial avec serpent et nourriture
  useEffect(() => {
    if (!gameStarted && initialCanvasRef.current) {
      const canvas = initialCanvasRef.current;
      const ctx = canvas.getContext("2d");

      // Configuration du jeu
      const gridSize = 25; // Grille plus grande pour le canvas 500x500
      const tileCount = canvas.width / gridSize;

      // Couleurs personnalisables via les variables CSS
      const getComputedStyle = window.getComputedStyle(
        document.documentElement
      );
      const snakeColor =
        getComputedStyle.getPropertyValue("--snake-color") || "#eaeff2";
      const foodColor =
        getComputedStyle.getPropertyValue("--food-color") || "#CC2D30";
      const gridColor =
        getComputedStyle.getPropertyValue("--grid-color") || "#333333";
      const backgroundColor =
        getComputedStyle.getPropertyValue("--snake-bg-color") || "#121212";

      // Effacer le canvas
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dessiner la grille
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }

      // Serpent initial
      const initialSnake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 },
      ];

      // Dessiner le serpent initial
      ctx.fillStyle = snakeColor;
      for (let i = 0; i < initialSnake.length; i++) {
        ctx.fillRect(
          initialSnake[i].x * gridSize,
          initialSnake[i].y * gridSize,
          gridSize - 1,
          gridSize - 1
        );
      }

      // Dessiner la nourriture initiale
      const initialFood = { x: 15, y: 10 };
      ctx.fillStyle = foodColor;
      ctx.fillRect(
        initialFood.x * gridSize,
        initialFood.y * gridSize,
        gridSize,
        gridSize
      );
    }
  }, [gameStarted]);

  // Fonction pour démarrer le jeu avec les flèches directionnelles
  useEffect(() => {
    const startGameWithArrows = (e) => {
      if (
        !gameStarted &&
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
      ) {
        setGameStarted(true);
        // Définir la direction initiale en fonction de la touche pressée
        switch (e.key) {
          case "ArrowUp":
            window.initialDirection = "up";
            break;
          case "ArrowDown":
            window.initialDirection = "down";
            break;
          case "ArrowLeft":
            window.initialDirection = "left";
            break;
          case "ArrowRight":
            window.initialDirection = "right";
            break;
        }
      }
    };

    document.addEventListener("keydown", startGameWithArrows);
    return () => {
      document.removeEventListener("keydown", startGameWithArrows);
    };
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Configuration du jeu
    const gridSize = 25; // Grille plus grande pour le canvas 500x500
    const tileCount = canvas.width / gridSize;

    // Couleurs personnalisables via les variables CSS
    const getComputedStyle = window.getComputedStyle(document.documentElement);
    const snakeColor =
      getComputedStyle.getPropertyValue("--snake-color") || "#eaeff2";
    const foodColor =
      getComputedStyle.getPropertyValue("--food-color") || "#CC2D30";
    const gridColor =
      getComputedStyle.getPropertyValue("--grid-color") || "#333333";
    const backgroundColor =
      getComputedStyle.getPropertyValue("--snake-bg-color") || "#121212";

    // Initialisation du serpent
    let snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];

    let food = {
      x: 15,
      y: 10, // Position initiale de la nourriture (la même que sur l'écran d'attente)
    };

    // Définir la direction initiale en fonction de la touche pressée au démarrage
    let xVelocity = 1; // par défaut vers la droite
    let yVelocity = 0;

    // Si une direction initiale a été définie lors du démarrage du jeu
    if (window.initialDirection) {
      switch (window.initialDirection) {
        case "up":
          xVelocity = 0;
          yVelocity = -1;
          break;
        case "down":
          xVelocity = 0;
          yVelocity = 1;
          break;
        case "left":
          xVelocity = -1;
          yVelocity = 0;
          break;
        case "right":
          xVelocity = 1;
          yVelocity = 0;
          break;
      }
      // Réinitialiser pour les futures parties
      window.initialDirection = null;
    }

    let lastXVelocity = xVelocity;
    let lastYVelocity = yVelocity;

    // Gestion du clavier
    const changeDirection = (e) => {
      if (paused) return;

      // Flèches directionnelles uniquement
      switch (e.key) {
        case "ArrowUp":
          if (lastYVelocity !== 1) {
            xVelocity = 0;
            yVelocity = -1;
          }
          break;
        case "ArrowDown":
          if (lastYVelocity !== -1) {
            xVelocity = 0;
            yVelocity = 1;
          }
          break;
        case "ArrowLeft":
          if (lastXVelocity !== 1) {
            xVelocity = -1;
            yVelocity = 0;
          }
          break;
        case "ArrowRight":
          if (lastXVelocity !== -1) {
            xVelocity = 1;
            yVelocity = 0;
          }
          break;
        case " ":
          // Espace pour mettre en pause
          setPaused(!paused);
          break;
      }
    };

    document.addEventListener("keydown", changeDirection);

    // Boucle principale du jeu
    const gameLoop = () => {
      if (gameOver || paused) return;

      // Effacer le canvas
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dessiner la grille
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }

      // Dessiner la nourriture
      ctx.fillStyle = foodColor;
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

      // Dessiner le serpent
      ctx.fillStyle = snakeColor;
      for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(
          snake[i].x * gridSize,
          snake[i].y * gridSize,
          gridSize - 1,
          gridSize - 1
        );
      }

      // Déplacer le serpent
      const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
      snake.unshift(head);

      // Vérifier si le serpent a mangé la nourriture
      if (head.x === food.x && head.y === food.y) {
        // Générer une nouvelle nourriture
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount),
        };

        // Vérifier que la nourriture n'apparaît pas sur le serpent
        let foodOnSnake = true;
        while (foodOnSnake) {
          foodOnSnake = false;
          for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === food.x && snake[i].y === food.y) {
              food = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount),
              };
              foodOnSnake = true;
              break;
            }
          }
        }
      } else {
        // Si le serpent n'a pas mangé, enlever la dernière partie
        snake.pop();
      }

      // Vérifier les collisions avec les murs
      if (
        head.x < 0 ||
        head.x >= tileCount ||
        head.y < 0 ||
        head.y >= tileCount
      ) {
        setGameOver(true);
      }

      // Vérifier les collisions avec le serpent lui-même
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          setGameOver(true);
        }
      }

      // Sauvegarder la direction actuelle
      lastXVelocity = xVelocity;
      lastYVelocity = yVelocity;
    };

    // Exécuter la boucle de jeu à intervalles réguliers
    // Vitesse réduite : 150ms au lieu de 100ms
    const gameInterval = setInterval(gameLoop, 150);

    // Nettoyage
    return () => {
      document.removeEventListener("keydown", changeDirection);
      clearInterval(gameInterval);
    };
  }, [gameStarted, gameOver, paused]);

  // Réinitialiser le jeu
  const resetGame = () => {
    setGameOver(false);
    setPaused(false);
    setGameStarted(true);
  };

  return (
    <div className={styles.snakeContainer}>
      {!gameStarted ? (
        <div className={styles.waitingScreen}>
          <canvas
            ref={initialCanvasRef}
            width={500}
            height={500}
            className={styles.snakeCanvas}
          />
          <div className={styles.startPrompt}>
            I guess you're not here for this but you can press any arrow to play
            snake and at least you'll have fun.{" "}
          </div>
        </div>
      ) : (
        <>
          {paused && <div className={styles.pauseMessage}>Jeu en pause</div>}
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            className={styles.snakeCanvas}
          />
          {gameOver && (
            <div className={styles.gameOver}>
              <h2>Game Over!</h2>
              <p className={styles.workPrompt}>
                You've lost, but no worries, our collaboration will be more
                successful :)
              </p>
              <div className={styles.buttonsContainer}>
                <button className={styles.resetButton} onClick={resetGame}>
                  Play again
                </button>
                <Link href="/selectedwork">
                  <button className={styles.navButton}>Check my work</button>
                </Link>
                <Link href="#about">
                  <button className={styles.navButton}>About me</button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SnakeGame;

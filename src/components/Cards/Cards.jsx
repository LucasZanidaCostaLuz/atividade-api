import React from "react";
import styles from "./Cards.module.css";
import Link from "next/link";

export default function Cards({ coffee }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{coffee.title}</h3>
      <p className={styles.cardDescription}>{coffee.description}</p>
      <p className={styles.cardIngredients}>Ingredientes: {coffee.ingredients}</p>
      <Link href={``} target="_blank" rel="noopener noreferrer"/>
    </div>
  );
}
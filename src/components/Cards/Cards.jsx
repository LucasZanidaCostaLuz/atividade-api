import React from "react";
import styles from "./Cards.module.css";

export default function Cards({ title, description, ingredients }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardIngredients}>Ingredientes: {ingredients.join(", ")}</p>
    </div>
  );
}
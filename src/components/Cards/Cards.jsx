import React from "react";
import styles from "./Cards.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Cards({ coffee }) {
  const router = useRouter();

  const navegarParaCafe = (coffeeId) => {
    router.push(`/get/${coffeeId}`);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{coffee.title}</h3>
      <p className={styles.cardDescription}>{coffee.description}</p>
      <p className={styles.cardIngredients}>Ingredientes: {coffee.ingredients}</p>
      <h1 onClick={() => navegarParaCafe(coffee.id)}>Detalhes do Café</h1>
    </div>
  );
}
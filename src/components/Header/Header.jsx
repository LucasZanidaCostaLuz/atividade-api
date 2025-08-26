import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Cafeteria</h1>
        <ul className={styles.nav}>
            <li className={styles.li}><a href="/Home" className={styles.links}>Home</a></li>
            <li className={styles.li}><a href="/Sobre" className={styles.links}>Sobre</a></li>
            <li className={styles.liHot}><a href="/HotCoffee" className={styles.links}>Café quente</a></li>
            <li className={styles.liIced}><a href="/IcedCoffee" className={styles.links}>Café gelado</a></li>
        </ul>
    </header>
  );
}
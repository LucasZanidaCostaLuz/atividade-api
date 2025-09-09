import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Cafeteria</h1>
        <ul className={styles.nav}>
            <li className={styles.li}>
                <Link href="/" className={styles.links}>Home</Link>
            </li>
            <li className={styles.li}>
              <Link href="/Sobre" className={styles.links}>Sobre</Link>
            </li>
            <li className={styles.liHot}>
              <Link href="/HotCoffee" className={styles.links}>Café quente</Link>
            </li>
            <li className={styles.liIced}>
              <Link href="/IcedCoffee" className={styles.links}>Café gelado</Link>
            </li>
        </ul>
    </header>
  );
}
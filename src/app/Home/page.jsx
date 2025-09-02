"use client"

import style from './home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={style.container}>
        <main className={style.main}>
            <div className={style.texts}>
                <h1 className={style.name}> Lucas Zani da Costa Luz <span className={style.class}>2TDS1</span> </h1>
                <h2 className={style.senai}>SENAI Valinhos</h2>
                <h2 className={style.phrase}>"Memento vivere"</h2>
            </div>
            <Image 
            src="/img/perfil.png"
            alt='Imagem perfil'
            width={300}
            height={300}
            className={style.coffeeImage}
            />
        </main>
    </div>
  )
}
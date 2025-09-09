"use client"

import React from 'react'
import axios from 'axios'
import {  useState } from 'react'
import Cards from '@/src/components/Cards/Cards'

export default function Page() {
  const [coffee, setCoffee] = useState([])
  const [loading, setLoading] = useState(false)
  const buscarCafe = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/hot`)
      const data = response.data
      setCoffee(data)
    } catch (error) {
      console.error("erro ao buscar usuarios", error)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className=''>
      <div className=''>
        <h1 className=''>Cafés</h1>
        <div className=''>
          <button onClick={buscarCafe} className=''>Buscar Café Quente</button>
        </div>
        <div className=''>
          {loading && <p>Carregando...</p>}
          {!loading && coffee.length === 0 && <p>Nenhum café encontrado</p>}
          <div className=''>
            {coffee.map((item) => (
              <Cards key={item.id} coffee={item} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}
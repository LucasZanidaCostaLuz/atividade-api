"use client"

import React from 'react'
import axios from 'axios'
import {  useState } from 'react'
import Cards from '@/src/components/Cards/Cards'

export default function page() {
  const [coffee, setCoffee] = useState([])
  const [loading, setLoading] = useState(false)
  const buscarCafe = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://api.sampleapis.com/coffee/hot")
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
          <button onClick={buscarCafe} className=''>
            {loading ? "Carregando..." : "Buscar Cafés"}
          </button>
        </div>
      </div>
      
    </div>
  )
}
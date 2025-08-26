
"use client"
import React from 'react'
import axios from 'axios'
import {  useState } from 'react'

export default function page() {
  const [coffee, setCoffee] = useState([])
  const [loading, setLoading] = useState(false)
  const buscarCafe = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://api.sampleapis.com/coffee/iced")
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
      <div className=''>
        {coffee.map((coffees) => (
          <div key={coffees.id} className='bg-white p-4 rounded-lg shadow'>
            <h3>{coffees.title}</h3>
            <p>{coffees.description}</p>
            <p>{coffees.ingreients}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
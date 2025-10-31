// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react'

function Interprete({ actor, nota10}) { //TODO: Mirar lo del nombre en rojo mediante nota10
  const { nombre, biografia, imagen,} = actor
  const resumen = biografia


  return (
    <article className="card">
      <div className="card-img-wrap">
        <img className="card-img" src={imagen} alt={nombre} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">{resumen}</p>
      </div>
    </article>
  )
}

export default Interprete

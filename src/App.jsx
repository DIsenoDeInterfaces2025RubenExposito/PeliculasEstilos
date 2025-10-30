
import React from 'react'
import './index.css'
import peliculas from './peliculas'
import Interprete from './Interprete'

function App() {
    const actores = peliculas[0]?.actores || []

    return (
        <div className="app-root">
            <header className="header">
                <h1>Intérpretes</h1>
                <p className="subtitulo">Listado de intérpretes disponibles</p>
            </header>

            <main className="grid-contenedor">
                {actores.map((actor, idx) => (
                    <Interprete key={idx} actor={actor} />
                ))}
            </main>
        </div>
    )
}

export default App

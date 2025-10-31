
import React from 'react'
import './index.css'
import peliculas from './data/peliculas.js'
import Interprete from './Interprete'

function App() {
    // const actores = peliculas[0]?.actores || []

    return (
        // <div className="app-root">
        //     <header className="header">
        //         <h1>Intérpretes</h1>
        //         <p className="subtitulo">Listado de intérpretes disponibles</p>
        //     </header>

        //     <main className="grid-contenedor">
                
        //     {
        //         peliculas.map((pelicula) =>
        //         pelicula.actores.map((actor, idx) => (
        //             <Interprete key={idx} actor={actor} />
        //         ))
        //     )}
        //     </main>
        // </div>


                <div className="app-root">
            <header className="header">
                <h1>Intérpretes</h1>
                <p className="subtitulo">Listado de intérpretes disponibles</p>
            </header>
            <main className="grid-contenedor">
                
            {
                peliculas.filter(pelicula=>pelicula.clasificacion==="Drama")
                .map((pelicula) =>
                pelicula.actores.map((actor, idx) => (
                    <Interprete 
                    key={idx} 
                    actor={actor} 
                    /* nota10 = {pelicula.nota === 10}   */
                    />
                ))
            )}
            </main>
        </div>
    )
}

export default App

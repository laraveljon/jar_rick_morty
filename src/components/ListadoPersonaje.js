import React from 'react'
import Listado from './Listado';

const ListadoPersonaje =({personajes}) =>(
    <div className="row">
       {personajes.map(personaje =>(
           <Listado 
              key={personaje.url}
              personaje={personaje}
            />

       ))}
    </div>
);

export default ListadoPersonaje;
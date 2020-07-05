import React from 'react'

const Listado = ({personaje}) =>{
    //extraer los datos
    const{image,name,species,status,type,gender} =personaje;
    return (
        <div className ="container">
          <div className="row row-cols-1 row-cols-sm-5 row-cols-md-4">
               <div className="col">
                    <div className="card">
                        <img src={image}/>
                           <div className="card-content">
                            <h3>Nombre: {name}</h3>
                            <h5>Especie:{species}</h5>
                            <h5>status:{status}</h5>
                            <h5>gender:{gender}</h5>
                            <h5>Type:{type}</h5>
                           </div>
                    </div>
               </div>
          </div>
        </div>
    )
}

export default Listado;
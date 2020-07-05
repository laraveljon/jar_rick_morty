import React,{Fragment,useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoPersonaje from './components/ListadoPersonaje';



function App() {

  // definir el state

  const[busquedaCharacter,guardarBusquedaCharacter] = useState({})     
  const[personajes,guardarDatos] = useState([]);
  const [paginaactual,guardarPaginaActual] = useState(1);
const [totalpaginas,guardarTotalpaginas] = useState(5);

  useEffect(() =>{
    if(Object.keys(busquedaCharacter).length === 0) return;
    console.log('No se ejecuta');

    const consultarApiCharacter = async() =>{
      const imagesPortaPagina = 2;
      const {rikymorty} = busquedaCharacter
  const url = `https://rickandmortyapi.com/api/${rikymorty}?page=${paginaactual}`
      //const url = `https://rickandmortyapi.com/api/${rikymorty}/`
    
       const resultado = await fetch(url);
       const personajes = await resultado.json();

       //console.log(names.results);
       
      
      guardarDatos(personajes.results);
    
      //console.log(personajes);
      //calcular la cantidad de páginas

      const calcularTotalPaginas = Math.ceil(personajes.count / imagesPortaPagina)
     guardarTotalpaginas(calcularTotalPaginas);

     //Mover la pantalla hacia arriba

    }
    consultarApiCharacter();
    
  },[busquedaCharacter,paginaactual]);

// definir lapagina anterior
const paginaAnterior = () =>{
  const nuevaPaginaActual = paginaactual - 1;

  if(nuevaPaginaActual === -1) return;

  guardarPaginaActual(nuevaPaginaActual);
  
}
// definir la pagina siguiente
const paginaSiguiente = () =>{
  const nuevaPaginaActual = paginaactual + 1;

  if(nuevaPaginaActual > totalpaginas) return;

 
  guardarPaginaActual(nuevaPaginaActual);
  
}

  return (
    <div >
     <Fragment>
     <div className="jumbotron">
         <Formulario guardarBusquedaCharacter ={guardarBusquedaCharacter}/>
     </div>
       <div className="row justify-content-center">
          <ListadoPersonaje personajes={personajes} />
        {(paginaactual ===1) ? null : (
          <button type="button" className="btn btn-info " onClick={paginaAnterior}>&laquo;Anterior </button>
        )}
        {(paginaactual === totalpaginas ) ? null : (
          <button type="button" className="btn btn-info " onClick={paginaSiguiente}>Siguiente &raquo;</button>
        )}

         
       </div>
     </Fragment>
    </div>
  );
}

export default App;

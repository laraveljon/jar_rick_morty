import React,{useState} from 'react'

const Formulario = ({guardarBusquedaCharacter}) => {

    const [busqueda, guardarBusqueda] = useState({
        rikymorty: ''
    });

    const [ error, guardarError] = useState(false);
    

    const { rikymorty} = busqueda

    //const {datos} = busqueda
      // función a cada input para leer su contenido
      const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // COnsultar Informacion las Apis

    const buscarInformacion = e =>{
        e.preventDefault();

        if(rikymorty.trim() === ''){
           guardarError(true);
           return;
        }
         guardarError(false)
        // Todo bian , pasar al componente principal
        guardarBusquedaCharacter(busqueda);
    }

    return (
        <div className="bg-info">
        {error ? <p className="alert alert-danger text-center p-2">Selecioana algún dato</p> :null }
         <div className="container">
          <div className="row">
      
           <form
             className="col card text-white bg-transparent mb-5 pt-5 pb-2"
             onSubmit ={buscarInformacion}
           >
            <fieldset>
             <legend className="text-center">Buscador de Rick and Morty</legend>
             <div className="row">
             <div className="col-md-6">
                 <div className="form-group">
                     <label>rikymorty</label>
                     

                     <select className="form-control" name="rikymorty"  onChange={actualizarState}>
                       <option>Selecionar</option>
                       <option >character</option>
                       <option>location</option>
                       <option>episode</option>
                     </select>
                 </div>
                 
             </div>
         </div>
             <button type="submit" className="btn-primary float-right">Buscar</button>
            </fieldset>
           </form>
          </div>
         </div>
        </div>
    );
}

export default Formulario
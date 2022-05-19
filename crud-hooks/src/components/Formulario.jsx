import React from 'react'
import shortid from 'shortid';      
import Swal from 'sweetalert2';

const Formulario = () => {

  const[tarea, setTarea] = React.useState("");
  const[tareas,setTareas] = React.useState([]);
  const[modo_editar, setModificar] = React.useState(false);
  const[id, setId] = React.useState('');
  const[error, setError] = React.useState(null)

  const editar = (item) =>{
    //alert(item.nombreTarea)
    setModificar(true)
    setTarea(item.nombreTarea)
    setId(item.id)
  }
  const editarTarea=(evt) => {
    evt.preventDefault();
    if(!tarea.trim()){
      //alert("La tarea no puede estar vacia")
      setError('Introduzca la tarea')
      return
  }
    //Editar registro
    const arrayEditado = tareas.map(
      listaTareas => listaTareas.id === id ?
      {id:id, nombreTarea: tarea} : listaTareas
    )
    setTareas(arrayEditado)
    setModificar(false)
    setTarea('')
    setId('')
    setError(null)
  }



  const agregarTarea=(evt)=>{
    evt.preventDefault()  //Evita que los datos del formulario se envien por el metodo GET

    if(!tarea.trim()){
      //alert('Debe ingresar una tarea')
      setError('Introduzca la tarea')
      return
    }
    //alert(tarea)
    setTareas([
      {id:shortid.generate(),nombreTarea:tarea},...tareas
    ])
    setTarea('')
    setError(null)
  }

    const quitarTarea = id =>{
      //alert(id)
      //const arrayFiltrado = tareas.filter(item => item.id !== id
      //)//buscar y filtrar los id, si el id es igual lo quitara y por lo tanto ese nuevo array ya no tendra ese elemento
      //setTareas(arrayFiltrado) 

      
      
          //const quitarTarea = (id) => {
      
      
      Swal.fire({
        title: '¿Estas seguro?',
        text: "No Podras Recuperar la Tarea!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
        }).then((result) => {
          const arrayFiltrado=tareas.filter(
            item => item.id !== id
          );
          setTareas(arrayFiltrado)
      
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'La tarea fue eliminada',
              'success'
            )
          }
        })
      }
      


    


  return (
    
    <div clas="caja0">

        <div class="caja1">
          <form onSubmit={modo_editar ? editarTarea : agregarTarea} >
                <legend>
                  {
                    error ? (<span class="text-danger">{error}</span>)
                    : null
                  //modo_editar ? "Editar tarea" : "Agregar tarea"
                 
                  } 
                
                  </legend>
                  <input type="text" class="ingrese"
                      onChange={(evt)=>setTarea(evt.target.value)} 
                      placeholder='Ingrese tarea' 
                      onChangeCapture={(evt) =>setTarea(evt.target.value)}
                      value={tarea}
                      required/>
                      {
                        modo_editar ? (<button class="btn btn-primary" className='form-control btn btn-primary mt-4'>Editar</button>) 
                        :
                       <button class="btn btn-dark" className='form-control btn btn-dark mt-4'>Agregar</button>
                      }
                      

                 
          </form>
        </div>

        <div class="caja2">
          <ul>
            <legend>Lista de Tareas</legend>
            {
              tareas.length == 0 ? 
              (<span className="lead">No hay tareas para mostrar</span>)
            :
            (
              tareas.map(item => (
                <li class="alert alert-light lista-item list-group-item-success input-group" role="alert" key={item.id}>
              <span className="Lista">{item.nombreTarea}</span>
              <button class= 'btn1 btn-sm btn-danger float-right mx-2'type="submit" onClick={()=>quitarTarea(item.id)}>Eliminar</button>
              <button class= 'btn2 delete btn-sm btn-warning float-right'  type="submit" onClick={()=>editar(item)} >Editar</button>
              </li>
              ))
            )
            }
          </ul>
        </div>

    </div>

  )
}

export default Formulario

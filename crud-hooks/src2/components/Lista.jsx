import React from "react";
import Swal from 'sweetalert2';

const Lista = ({setTodos,todos,setId, setEditar}) => {

  const eliminar = (id) =>{
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No Podras Recuperar la Tarea!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        var lista = []  
    todos.map(tarea => {
        if(tarea.id!==id){
          lista = [...lista,tarea]
        }
      })
      setTodos(lista)

        Swal.fire(
          'Tarea Eliminada.',
          'Eliminada con Exito'
        )
      }
    })
  }

  const editar = (id) => {
    setId(id)
    setEditar(true)
  }

  return (
    <div className="col Tareas">
        <h2>Lista de tareas</h2>
      {
        todos.length == 0 ?
        (<p className="mt-3">No hay Tareas para Mostrar</p>)
        :
        (
          todos.map(tarea => {
            console.log(todos)
            return(
              <ul key={tarea.id} className="Lista">
              <li class="alert alert-light lista-item list-group-item-success input-group" role="alert">
                <p>{tarea.todo}</p>
                <div class="input-group-append">
                  <button type="button" onClick={()=>editar(tarea.id)} className="btn btn-warning lib" class="btn btn-outline-secondary">
                    Editar
                  </button>
                  <button type="button" onClick={()=>eliminar(tarea.id)} className="btn btn-danger lib" class= "btn btn-outline-secondary">
                    Eliminar
                  </button>
                </div>
              </li>
            </ul>
            )
          })
        )
      }
    </div>
  );
};

export default Lista;

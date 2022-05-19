import React from 'react';
import shortid from 'shortid';
import Swal from 'sweetalert2';

    const quitarTarea = (id) => {


Swal.fire({
    title: 'Estas seguro?',
    text: "No podras recuperar la tarea",
    icon: 'Advertencia',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    confirmButtonText: 'Cancelar'
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

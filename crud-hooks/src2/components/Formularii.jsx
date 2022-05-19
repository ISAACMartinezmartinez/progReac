import React from "react"



const Formularii = () => {

const [tarea, setTarea] = React.useState('')

const[tareas, setTareas] = React.useState([])
const[modoEditar, setModoEditar] = React.useState(false)
const[id, SetId] =React .useState('')

const agregarTarea = evt=>{
    evt.preventDerfault()//evita que los datos del formulario se envien por metodo Get

    if(!tarea.trim()){
        alert('Debe ingresar una Tarea')
        return
    }
    alert(tarea)
    setTareas([{id:55555, nombre:tarea},...tareas])
    setTarea=('')
}
const editar = (item) => {
    //alert(item.nombreTarea)
    setModoEditar(true)
    setTarea(item.nombreTarea)
    SetId(item.id)
}
const editarTarea = (evt) =>{
    evt.preventDerfault()
    if(!tarea.trim()){
        alert("La Tarea no Puede estar Vacia ")
    }
    //Editar registro
    const arrayEditado = tareas.map(
    listaTareas => listaTareas.id === id ? 
    {id:id, nombreTarea:tarea} : listaTareas
) 
        setTareas(arrayEditado)
        setModoEditar(false)
        SetId('')
        setTarea('')
}
return (
    <>
        <div class="container">
        <div class="row">
                <div class="col-10"><center>
                    <h1 class="mt-5">CRUD Formularios Hooks</h1>
                    </center></div>
                <div class="col-4">
                    <center><h3 class="mt-3"> 
                    {
                        modoEditar ? "Editar Tarea":"Agregar Tarea"
                    }
                    </h3></center>
                    
                    <form onSubmit={modoEditar ? agregarTarea : agregarTarea} >
                    <input  required type="text" class="form-control mt-3" placeholder="Ingresa Tarea"  aria-describedby="basic-addon1" onChange={evt=>setTarea(evt.target.value)} value={tarea}/>

                    {
                        modoEditar ? (<button type="submit" class="btn btn-dark form-control mt-3">Editar</button>)
                        :
                        (<button type="submit" class="btn btn-dark form-control mt-3">Agregar</button>)
                    }
                    </form>
                </div>
                <div class="col-6">
                    <center><h3 class="mt-3">Lista de Tareas</h3></center>
                    {
                        tareas.map(item =>(
                            <div class="input-group mt-3">
                                <input type="text" class="form-control" placeholder="Nombre de la Tarea" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">{item.nombreTarea}</input>
                                <div class="input-group-append" id="button-addon4">
                                    <button type="button" class="btn btn-warning" onClick={()=> editar()}>Editar</button>
                                    <button type="button" class="btn btn-danger">Eliminar</button>
                                </div> 
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
)
}

export default Formularii
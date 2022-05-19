import React from 'react'

const Formularios = () => {

    const initMacotas =[
        {mascota:"Chihuahua", sintoma: "Tiembla etc etc"},
        {mascota:"Pitbull", sintoma: "Babea espuma de la boca"},
        {mascota:"Gatos", sintoma: "no come"}
    ];
    const shortid= require('shortid')
    const [mascota, setMascota] = React.useState("")
    const [sintoma, setSintoma] = React.useState("")
    const [agregar, setAgregar] = React.useState(   
        [
            {mascota:"Chihuahua", sintoma: "Tiembla etc etc"},
            {mascota:"Pitbull", sintoma: "Babea espuma de la boca"},
            {mascota:"Gatos", sintoma: "no come"}
        ]
    )

    const guardarMascota = (eve) =>{
        eve.preventDefault()

        //validando que los campos no estan vacios

        if(!mascota.trim()){
            alert("Ingrese Mascota")
            return
        }
        if(!sintoma.trim()){
            alert("Ingrese sintoma")
            return
        }
        const obj={
            mascota:mascota, sintoma:sintoma
    
        }
        setAgregar([...agregar,obj])
        alert("Procesando Datos")
    }

  return (
    <>
        <div className='container mt-5'>
        <h1>Registro Macotas</h1>
        <form onSubmit={guardarMascota}>
            <input type="text" onChange={(e)=>setMascota(e.target.value)} placeholder='Nombre de la Mascota' className='form-control mt-5' />
            <input type="text" onChange={(evt) => setSintoma(evt.target.value)} placeholder='Sintoma' className='form-control mt-3' />
            <button type='submit' className='form-control mt-3 btn btn-primary'>Registrar</button>
        </form>


                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Mascota</th>
                        <th scope="col">Sintomas</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>

                            <td scope='row'>{agregar.map((valorMascota, index)=>{
                                return <p key={index}>{shortid.generate()}</p>
                            })
                            }
                             </td>

                            <td scope='row'>{agregar.map((valorMascota, index)=>{
                                return <p key={index}>{valorMascota.mascota}</p>
                            })
                            }
                        </td>

                        <td scope='row'>{agregar.map((valorMascota, index)=>{
                                return <p key={index}>{valorMascota.sintoma}</p>
                            })
                            }
                        </td>
                            
                        </tr>    
                
                </tbody>
            </table>

        </div>
    </>
  )
}

export default Formularios
import { useState } from "react";
import { BaseColaboradores } from "../components/BaseColaboradores";

const Formulario = (props) => {

    const [idColaborador, setIdColaborador] = useState(BaseColaboradores.length.toString())
    const [inputColaborador, setInputColaborador] = useState("");
    const [inputColaboradorEmail, setInputColaboradorEmail] = useState("");
    const incrementarId = () => {setIdColaborador (idColaborador + 1)
    }

    const agregarColaborador = (e) => {
        e.preventDefault();

        if(!inputColaborador|| !inputColaboradorEmail){
            alert("Ingresar Nombre y Correo");
            return;
        } else {

        const listaColaboladores = {
            id: idColaborador,
            nombre: inputColaborador,
            correo: inputColaboradorEmail,    
        };

        props.agregarColaborador(listaColaboladores)

        /* Vaciar Formulario*/
        setInputColaborador("")
        setInputColaboradorEmail("")
    }}

    return (

            <>  
                <form onSubmit={agregarColaborador}>
                    <input className="w-100 mb-3"   placeholder="Ingresa el nombre del colaborador" type="text"  value={inputColaborador} onChange={(e) => setInputColaborador(e.target.value)} />
                    <input className="w-100 mb-3" placeholder="Ingresa correo del colaborador" type="email" value={inputColaboradorEmail} onChange={(e) => setInputColaboradorEmail(e.target.value)} />
                    <button className="w-100 bg-primary rounded-2 border-0 p-2 text-light" onClick={incrementarId}>Agregar Colaborador</button>
                </form>
            </>
             
    )  
}

export default Formulario; 

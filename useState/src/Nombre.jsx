import { useState } from "react";
import { Container, Button} from "react-bootstrap";
import Swal from "sweetalert2";

export default function Nombre(){
    const[nombre,setNombre]=useState("")
    const[mensaje,setMensaje]=useState("")
    let ver =()=>{
        if(nombre!=""){
            Swal.fire(nombre)
            setMensaje("")
        }
       else{
        setMensaje("Por favor escriba su nombre")
       }
    }
    return(
        <Container>
            <h1>Nombre: {nombre}</h1>
            <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
            {/*Operador ternario*/}
            <p>{mensaje !=""?mensaje:""}</p>
            <br />
            <Button onClick={ver}>Aceptar</Button>
        </Container>
    )
}
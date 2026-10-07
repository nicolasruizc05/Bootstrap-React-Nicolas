import { useState } from "react"
import { Container,Button } from "react-bootstrap"

export default function Estados(){
    const [count,setCount]= useState(0)
    let aumentar=()=>{
        setCount(count+1)
    }
    let disminuir=()=>{
        setCount(count-1)
    }
    return(
        <Container>
            <h1>conteo: {count}</h1>
            <Button onClick={aumentar}>Aumentar</Button>
            <Button onClick={()=>setCount(count-1)}>Disminuir</Button>
            <Button onClick={disminuir}>DisminuirClasica</Button>
        </Container>
    )
}

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Formulario() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [password, setPassword] = useState("")
    let ver = () => {
        alert(nombre + " " + apellido)
    }
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e) => setNombre(e.target.value)} />
                    <Form.Text className="text-muted">
                        {nombre}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su apellido" onChange={(e) => setApellido(e.target.value)} />
                    <Form.Text className="text-muted">
                        {apellido}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su direccion" onChange={(e) => setDireccion(e.target.value)} />
                    <Form.Text className="text-muted">
                        {direccion}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" placeholder="Ingrese su telefono" onChange={(e) => setTelefono(e.target.value)} />
                    <Form.Text className="text-muted">
                        {telefono}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su Contraseña" onChange={(e) => setPassword(e.target.value)} />
                    <Form.Text className="text-muted" style={{ color: password >= 6 ? "green" : "red" }}>
                        {password}
                    </Form.Text>
                </Form.Group>
                <Button onClick={ver}>Aceptar</Button>
            </Form>
            <div>
                <input type="text" placeholder="escriba Nombre" onChange={(e) => setNombre(e.target.value)} />
                {nombre}
                <input type="text" placeholder="escriba Apellido" onChange={(e) => setApellido(e.target.value)} />
                {apellido}
                <input type="text" placeholder="escriba Direccion" onChange={(e) => setDireccion(e.target.value)} />
                {direccion}
                <input type="text" placeholder="escriba Telefono" onChange={(e) => setTelefono(e.target.value)} />
                {telefono}
                <input type="text" placeholder="escriba Password" onChange={(e) => setPassword(e.target.value)} />
                <p style={{ color: password.length >= 6 ? "green" : "red" }}>{password}</p>
                <Button onClick={ver}>Aceptar</Button>
            </div>
        </Container>
        // <div>
        //     <input type="text" placeholder="escriba Nombre" onChange={(e)=>setNombre(e.target.value)}/>
        //     {nombre}
        //     <input type="text" placeholder="escriba Apellido" onChange={(e)=>setApellido(e.target.value)} />
        //     {apellido}
        //     <input type="text" placeholder="escriba Direccion" onChange={(e)=>setDireccion(e.target.value)}/>
        //     {direccion}
        //     <input type="text" placeholder="escriba Telefono"onChange={(e)=>setTelefono(e.target.value)} />
        //     {telefono}
        //     <input type="text" placeholder="escriba Password" onChange={(e)=>setPassword(e.target.value)} />
        //     <p style={{color:password.length>=6?"green":"red"}}>{password}</p>
        //     <Button onClick={ver}>Aceptar</Button>
        // </div>
    )
}
import './App.css'
import Estados from './Estados'
import Nombre from './Nombre'
import Formulario from './Formulario'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Container>
      <Estados></Estados>
      <Nombre></Nombre>
      <Formulario></Formulario>
    </Container>
  )
}

export default App

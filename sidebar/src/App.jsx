import Side from './Sidebar'
import Dashboard from './Dashboard'
import { Container } from 'react-bootstrap'
import './App.css'

function App() {


  return (
   <Container className='d-flex'>
      <Side></Side>
      <Dashboard></Dashboard>
   </Container>
  )
}

export default App

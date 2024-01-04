import{Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import Navbar from './components/Navbar'
import Shop from './pages/shop';




function App() {
  return (
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route index element ={<Shop />} />
      </Routes>
    </Container>
  );
}

export default App;

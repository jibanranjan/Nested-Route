import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Support from './Components/Support';
import{Routes} from 'react-router-dom'
import{Route} from 'react-router-dom'
import Product from './Routing/Product';
import About from './Routing/About'
import ProductDetails from './Routing/ProductDetails';
import Technologies from './Routing/Technologies';
import Html from './Routing/Html';
import Css from './Routing/Css';
import JavaScript from './Routing/JavaScript';
import React from './Routing/React';
import { Navigate } from 'react-router-dom';
function App() {
  return (
<div>     <Nav />
         {/* <Login /> */}
       <Routes>
             <Route path="/" element={<Home />} />
             <Route path='/Support' element={<Support />} />
             <Route path='/Product' element={<Product />} />
             <Route path='/About' element={<About />} />
             <Route path='/ProductDetails/:id' element={<ProductDetails />} />
             <Route path='/Technologies' element={<Technologies />} >
             <Route path='' element={<Navigate to="Html" />} />
              <Route path='Html' element={ <Html />} />
              <Route path='Css' element={<Css />} />
              <Route path='JavaScript' element={<JavaScript />} />
              <Route path='React' element={<React />} />
              {/* <Route path='*' element={} */}
              
              
               </Route>
             {/* <Route  path='/Html' element={<Html />} /> */}
       
       
       </Routes>

</div>
  );
}

export default App;

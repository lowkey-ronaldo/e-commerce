import Home from './routes/home/home.component';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/login/Login';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';

// Route ti porta nella pagina SOLO se combacia l'URL.
// Devo usare Link per essere reindirizzato nella pagina che voglio.

// Home viene caricata con Navigation se è SOLO presente "/", altrimenti non è visibile.

// Checkout sarebbe il riepilogo

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("isLogged")){
      navigate('/login');
    }
  }, [])

  return (
    
    <Routes>
      <Route path = '/' element={<Navigation/>} >
        <Route index element={<Home />} />
        <Route path = 'shop/*' element={<Shop/>} />
        <Route path = 'login' element={<Login/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path = '*' element={<Home/>} />
      </Route>
    </Routes>

  );
}

export default App;

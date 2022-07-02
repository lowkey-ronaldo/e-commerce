import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

// Rout SOLO ti porta nella pagina se combacia l'URL.
// Devo usare Link per essere reindirizzato nella pagina che voglio.

// Home viene caricata con Navigation se è SOLO presente "/", altrimenti non è visibile.

// Checkout sarebbe il riepilogo

const App = () => {
  return (
    <Routes>
      <Route path = '/' element={<Navigation/>} >
        <Route index element={<Home />} />
        <Route path = 'shop/*' element={<Shop/>} />
        <Route path = 'sign-in' element={<SignIn/>} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>

  );
}

export default App;

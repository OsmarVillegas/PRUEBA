import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/News'
import Customers from './pages/Customers';
import ContactUs from './pages/Contact-Us';
import AboutUs from './pages/About-Us';
import NoticiasYEventos from './pages/NoticiasYEventos';

export function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Customers" element={<Customers />} />
          <Route exact path="/About-Us" element={<AboutUs />} />
          <Route exact path="/News" element={<New />} />
          <Route exact path="/Contact-Us" element={<ContactUs />} />
          <Route exact path="/Update" element={<ContactUs />} />
          <Route exact path="/Crud" element={<NoticiasYEventos />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}


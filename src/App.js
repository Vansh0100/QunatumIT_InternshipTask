import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import TopNav from './Components/Navbar';
import Section1 from './Components/MainSection';
import Services from './Components/Services';
import FooterSec from './Components/Footer';

function App() {
  return (
    <>
    <Header/>
    <TopNav/>
    <Section1/>
    <Services/>
    <FooterSec/>
    </>
  );
}

export default App;

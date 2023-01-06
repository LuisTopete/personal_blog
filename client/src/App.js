import { Route, Routes } from "react-router-dom";
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Contacts from './components/contacts/Contacts.js';
import Skills from "./components/shared/Skills";
import Portfolio from "./components/shared/Portfolio";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/*' element={<Nomatch />} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/porfolio' element={<Portfolio/>} />
    </Routes>
  </>
)

export default App;
import { Route, Routes } from "react-router-dom";
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Contacts from './components/contacts/Contacts.js';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;
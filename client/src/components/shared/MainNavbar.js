import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <nav>
      <h2>ContactList</h2>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/contacts'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default MainNavbar;
import { Link } from 'react-router';

function Navbar(){
  return (
    <nav>
      <Link to="/#hero" id="logo">
        <img src="/images/GFox.png" alt="GFox Logo" width="130" height="100" />
      </Link>
      <ul>
        <li><Link to="/#hero">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;

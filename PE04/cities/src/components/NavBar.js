import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Cities Application</h1>
      <div className="nav-links">
        <Link to="/">Cities List</Link>
        <Link to="/add">Add City</Link>
      </div>
    </nav>
  );
}
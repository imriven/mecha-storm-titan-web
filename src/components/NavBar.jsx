import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(8px)',
      borderRadius: '8px',
      padding: '10px 20px',
      display: 'flex',
      gap: '20px',
      zIndex: 1000,
    }}>
      {['/', '/about', '/team', '/events', '/projects', '/mediahub', '/contact', '/partners', '/store'].map((path, i) => {
        const name = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
        return (
          <NavLink
            key={i}
            to={path}
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#ddd',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
            })}
          >
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;

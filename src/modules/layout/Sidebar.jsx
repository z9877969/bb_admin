import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const getIsActive = ({ isActive }) =>
  isActive
    ? {
        color: 'green',
        fontSize: '1.1rem',
        backgroundColor: 'lightgreen',
        padding: '0.8rem 1.2rem',
      }
    : { color: 'inherit' };

const Sidebar = () => {
  return (
    <List sx={{ borderRight: '1px solid black', height: '100%' }}>
      <ListItem>
        <NavLink style={getIsActive} to="/">
          Головна
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink style={getIsActive} to="/products">
          Товари
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink style={getIsActive} to="/blogs">
          Блоги
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink style={getIsActive} to="/about">
          Про БрашБаді
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;

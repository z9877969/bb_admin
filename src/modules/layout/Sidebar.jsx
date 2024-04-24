import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const getIsActive = ({ isActive }) =>
  isActive
    ? {
        color: 'inherit',
        borderBottom: '1px solid #00000050',
        borderTop: '1px solid #00000050',
        fontSize: '1.2rem',
        padding: '0.8rem 0',
        width: '100%',
        fontWeight: '700',
        display: 'block',
      }
    : {
        color: 'inherit',
        padding: '0.8rem 0',
        width: '100%',
        display: 'block',
      };

const Sidebar = () => {
  return (
    <List
      sx={{
        borderRight: '1px solid black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ListItem sx={{ m: 0, pb: 0, pt: 0 }}>
        <NavLink style={getIsActive} to="/">
          Головна
        </NavLink>
      </ListItem>
      <ListItem sx={{ m: 0, pb: 0, pt: 0 }}>
        <NavLink style={getIsActive} to="/products">
          Товари
        </NavLink>
      </ListItem>
      <ListItem sx={{ m: 0, pb: 0, pt: 0 }}>
        <NavLink style={getIsActive} to="/blogs">
          Блоги
        </NavLink>
      </ListItem>
      <ListItem sx={{ m: 0, pb: 0, pt: 0 }}>
        <NavLink style={getIsActive} to="/about">
          Про БрашБаді
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;

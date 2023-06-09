import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
const location = useLocation();

  return (
  <StyledNav style={{display: location.pathname === '/' || location.pathname === '/logIn'  ? 'none': 'flex'}}>
    <div>
      <Link to={"/home"}>
      <img className='logo' src="https://res.cloudinary.com/dalhatgbg/image/upload/v1684566285/logo_2_qqpvpa.png" alt="Loading..." />
      </Link>
    </div>
    <div>
      <NavLink className='navLink' to='/buildingForm' >Perfil</NavLink>
    </div>
    <div>
      <NavLink className='navLink' to='/employees' >Empleados</NavLink>
    </div>
    <div>
      <NavLink className='navLink' to='/wageForm' >Liquidacion</NavLink>
    </div>
    <div>
      <NavLink className='navLink' to='/downloads' >Descargas</NavLink>
    </div>
            
  </StyledNav>
    )
}

const StyledNav = styled.div`
    align-items: center;
    width: 100%;
    justify-content: space-around;
    color: #ffffff;
    background-color: rgb(20,145,94);
    .navLink {
        font-size: 30px;
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
    }
    .logo {
        width: 180px;
    }

`

export default NavBar;
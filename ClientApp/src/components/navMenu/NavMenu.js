import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Telescope from '../Images/Logo/telescope.png';
import './NavMenu.css';

function NavMenu() {
  let title = '{Devscover}';
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar
      className='navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 nav'
      light
    >
      <Container>
        <NavbarBrand tag={Link} to='/'>
          <img
            src={Telescope}
            alt=''
            style={{ width: '3rem' }}
            className='mx-4'
          />
          {title}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse
          className='d-sm-inline-flex flex-sm-row-reverse'
          isOpen={collapsed}
          navbar
        >
          <ul className='navbar-nav flex-grow'>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/counter'>
                Counter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className='text-dark' to='/fetch-data'>
                Fetch data
              </NavLink>
            </NavItem>
          </ul>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;

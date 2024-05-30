import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineLineChart } from 'react-icons/ai';
import { FaRegListAlt, FaTrophy } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavItem = styled(NavLink)`
  color: #000;
  text-decoration: none;
  &.active {
    color: #1e90ff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/" exact>
        <AiOutlineHome size={24} />
        Home
      </NavItem>
      <NavItem to="/ranking">
        <FaTrophy size={24} />
        Ranking
      </NavItem>
      <NavItem to="/games">
        <FaRegListAlt size={24} />
        Games
      </NavItem>
      <NavItem to="/statistics">
        <AiOutlineLineChart size={24} />
        Statistics
      </NavItem>
    </Nav>
  );
};

export default Navbar;

import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const NaviContainer = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const SidebarNavi = ({navItems}) => (
  <NaviContainer>
    {navItems.map(({name, icon, path}) => (
      <NavItem key={name} icon={icon} name={name} path={path} />
    ))}
  </NaviContainer>
);
export default SidebarNavi;

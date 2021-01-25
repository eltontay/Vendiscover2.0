import React, { useState } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkAdj,
  MobileIcon,
} from './SidebarElements';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About Us
            </SidebarLink>
            <SidebarLinkAdj
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact Us
            </SidebarLinkAdj>
            <SidebarLink
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Boopie's Journey
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import {
  SidebarContainer,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkAdj,
  OpenIcon,
} from './SidebarElements';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <OpenIcon onClick={toggle} />
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <CloseIcon onClick={toggle} />
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

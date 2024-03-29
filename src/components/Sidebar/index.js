import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SideBtnWrap,
        SidebarWrapper,
        SidebarLink,
        SidebarMenu,
        SidebarRoute
        } from './SidebarElements'


const Sidebar = ({isOpen,toggle}) => {
  return (
    <div>
      <SidebarContainer isOpen = {isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon/>
          </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = "about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to = "discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to = "services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to = "signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/signin">Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar

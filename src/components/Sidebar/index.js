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


const Sidebar = () => {
  return (
    <div>
      <SidebarContainer>
          <Icon>
              <CloseIcon/>
          </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = "about">About</SidebarLink>
                <SidebarLink to = "discover">Discover</SidebarLink>
                <SidebarLink to = "services">Services</SidebarLink>
                <SidebarLink to = "signup">Sign Up</SidebarLink>
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

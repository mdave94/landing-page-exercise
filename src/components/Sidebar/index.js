import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
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
                <SidebarLink>
                    About
                </SidebarLink>
                <SidebarLink>
                    Discover
                </SidebarLink>
                <SidebarLink>
                    Services
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar

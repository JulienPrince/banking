import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarConatriner,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWraper,
  SideBtnRout,
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarConatriner isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnRout>
          <SidebarRoute to="/signin" onClick={toggle}>
            Sign In
          </SidebarRoute>
        </SideBtnRout>
      </SidebarWraper>
    </SidebarConatriner>
  );
};

export default SideBar;

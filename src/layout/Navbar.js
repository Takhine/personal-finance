import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";

import {
  Toolbar,
  AppBar,
  useMediaQuery,
} from "@material-ui/core";
import { Menu, Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
// Images
import logo from "../static/images/logo.png";
import menu from "../static/images/icons/menu-icon.svg";


const Navbar = (props) => {
  const [navBackground, setNavBackground] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const mobileMenu = useMediaQuery("(min-width: 768px)");

  const pathName = props.location.pathname;

  const showDrawer = () => {
    setDrawer(true);
  };

  const hideDrawer = () => {
    setDrawer(false);
  };
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", transition: "1s ease" }}
        id="navbar"
      >
        <Toolbar className="toolbar">
          <NavLink exact to="/">
            <img className="logo" src={logo} alt="Body Politic Acupunture" />
          </NavLink>
          <div className="grow" />
          {mobileMenu ? (
            <NavMenu />
          ) : (
            <img
              onClick={() => showDrawer()}
              width={25}
              src={menu}
              alt="Personal Finance"
            />
          )}
          {mobileMenu && (
            <NavLink exact to="/contact-us">
              <Button className="consultation-button">Contact us</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className="sidebar"
        title="Explore"
        placement="right"
        closable={true}
        onClose={hideDrawer}
        visible={drawer}
        style={{ zIndex: "2000" }}
        headerStyle={{ border: "none" }}
      >
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={[`${pathName}`]}
          mode="inline"
          theme="light"
        >
          <Menu.Item key="/" onClick={() => hideDrawer()}>
            <NavLink exact to="/" activeClassName="selected">
              <p className="link">Home</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/contact-us" onClick={() => hideDrawer()}>
            <NavLink exact to="/contact-us" activeClassName="selected">
              <p className="link">Contact us</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/services" onClick={() => hideDrawer()}>
            <NavLink exact to="/services" activeClassName="selected">
              <p className="link">Services</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="/privacy-policy"
            activeClassName="selected"
            onClick={() => hideDrawer()}
          >
            <NavLink exact to="/privacy-policy">
              <p className="link">Privacy Policy</p>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Drawer>
    </React.Fragment>
  );
};

export default withRouter(Navbar);

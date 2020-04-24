import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const TopNav = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const toggleDropdown = () => setdropdownOpen(!dropdownOpen);

  return (
    <React.Fragment>
      <Navbar color="dark" dark fixed="top" style={{ color: "white" }}>
        <NavbarBrand className="mr-auto ml-5">LOGO</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>
              <i className="fa fa-envelope" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <i className="fa fa-users" />
            </NavLink>
          </NavItem>
          <Dropdown
            style={{ borderLeft: `1px solid white` }}
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
          >
            <DropdownToggle nav caret style={{ color: "#fff" }}>
              <i className="fa fa-user-circle mr-2" /> User Name
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                Logout
                <i className="fa fa-sign-out ml-4" style={{ color: "black" }} />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default TopNav;

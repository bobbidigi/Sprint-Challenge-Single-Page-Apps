import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem} from 'reactstrap';

// TODO: Add missing menu/tabs/nav below

export default function TabNav() {
  return (
    <div>
      <Nav>
        <Link to="/"><NavItem>Home</NavItem></Link>
        <Link to="/characters"><NavItem>Characters</NavItem></Link>
        <Link to="/locations"><NavItem>Locations</NavItem></Link>
        <NavItem>Search</NavItem>
      </Nav>
    </div>
  )
}

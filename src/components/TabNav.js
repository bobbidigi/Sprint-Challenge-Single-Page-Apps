import React from "react";
import { NavLink } from "react-router-dom";
// import { Nav, NavItem} from 'reactstrap';
import { Menu, Icon } from 'semantic-ui-react'
// TODO: Add missing menu/tabs/nav below

export default class TabNav extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <NavLink to="/">
          <Menu.Item
          name='Home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        ><Icon name='home' />Home Page</Menu.Item>
        </NavLink>
        <NavLink to="characters"><Menu.Item
          name='Characters'
          active={activeItem === 'chararcters'}
          onClick={this.handleItemClick}
        /></NavLink>
        <NavLink to="locations"><Menu.Item
          name='Locations'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        /></NavLink>
        <NavLink to="episodes"><Menu.Item
          name='Episodes'
          active={activeItem === 'episodes'}
          onClick={this.handleItemClick}
        /></NavLink>
      </Menu>
    )
  }
}




// export default function TabNav() {
//   return (
//     <div>
//       <Nav>
//         <Link to="/"><NavItem>Home</NavItem></Link>
//         <Link to="/characters"><NavItem>Characters</NavItem></Link>
//         <Link to="/locations"><NavItem>Locations</NavItem></Link>
//         <NavItem>Search</NavItem>
//       </Nav>
//     </div>
//   )
// }

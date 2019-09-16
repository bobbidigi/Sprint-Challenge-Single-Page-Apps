import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/


const panes = [
        { menuItem: "home", pane: <CharacterList/>},
        { menuItem: 'characters', pane: 'Tab 2 Content' },
        { menuItem: 'locations', pane: 'Tab 3 Content' },
        { menuItem: 'episodes', pane: 'Tab 4 Content' },
      ]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

 export default TabNav;   

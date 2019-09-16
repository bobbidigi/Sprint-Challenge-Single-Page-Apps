import React from "react";
import { Tab } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from './LocationsList';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/


const panes = [
        { menuItem: "home", pane: 'home' },
        { menuItem: 'characters', pane: <CharacterList /> },
        { menuItem: 'locations', pane: <LocationsList /> },
        { menuItem: 'episodes', pane: 'episodes' },
      ]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

 export default TabNav;   

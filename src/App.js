import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
// import SearchForm from "./components/SearchForm";

export default function App() {

  return (
    
    <main>
      <Header />
      <TabNav />
     
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={CharacterList}/>
      <Route path='/locations' component={LocationsList}/>
      {/* <Route path='search' component={SearchForm}/> */}
    </main>
  );
}

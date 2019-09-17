import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import Episodes from "./components/Episodes"
// import SearchForm from "./components/SearchForm";

export default function App() {

  return (
    
    <main>
      <Header />
      <TabNav />     
      <Route exact path='/' render={(props) => <WelcomePage {...props} />}/>
      <Route path='/characters' render={(props) => <CharacterList {...props}/>}/>
      <Route path='/locations' component={LocationsList}/>
      <Route path='/episodes' component={Episodes}/>
    </main>
  );
}

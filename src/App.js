import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Accordion from './components/Accordion';
import ButtonCounter from './components/ButtonCounter';
// TODO: Refactor back into organism with dropdown and result
import ColorDropdown from './components/ColorDropdown';
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import UserList from "./components/UserList";
import Menu from "./components/Menu";
// Example Data
import { colorData, colorListData } from "./data/colors";
import { dadJokes } from "./data/dadJokes";
import "./App.css";
import Translate from "./components/Translate";


export default () => {

  return (
    <Router>
      <header className="ui container">
        <h1>React Hook Playground</h1>
        <ul className="primaryNav">
          <li><NavLink exact to="/" activeClassName="is_active">Home</NavLink></li>
          <li><NavLink to="/accordion" activeClassName="is_active">Accordion</NavLink></li>
          <li><NavLink to="/counter" activeClassName="is_active">Counter</NavLink></li>
          <li><NavLink to="/dropdown" activeClassName="is_active">Dropdown</NavLink></li>
          <li><NavLink to="/mock-api" activeClassName="is_active">Mock API</NavLink></li>
          <li><NavLink to="/translate" activeClassName="is_active">Google Translate</NavLink></li>
          <li><NavLink to="/wikipedia-seach" activeClassName="is_active">Wikipedia Search</NavLink></li>
        </ul>
      </header>
      <main className="ui container">
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route exact path="/accordion">
            <PageAccordion />
          </Route>
          <Route path="/counter">
            <PageCounter />
          </Route>
          <Route path="/dropdown">
            <PageDropdown />
          </Route>
          <Route exact path="/mock-api">
            <PageMockAPI />
          </Route>
          <Route path="/translate">
            <PageTranslate />
          </Route>
          <Route path="/wikipedia-seach">
            <PageWikipediaSearch />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

/* -------------------------------------------------
   PAGES
------------------------------------------------- */

function PageHome() {
  return (
    <div>
      <h2 className="ui dividing header">Home</h2>
      <p>Sample UI Componenets featuring Semantic UI. </p>
    </div>
  );
};

function PageAccordion() {
  return (
    <div>
      <h2 className="ui dividing header">Accordion</h2>
      <Accordion items={dadJokes} />
    </div>
  );
};

function PageCounter() {
  return (
    <div>
      <h2 className="ui dividing header">Button Counter</h2>
      <ButtonCounter />
    </div>
  );
};

function PageDropdown() {
  const [selectedColor, setSelectedColor] = useState(colorListData[0]);
  return (
    <div>
      <h2 className="ui dividing header">Dropdowns</h2>
      <h2 className="ui dividing header">Color Dropdown</h2>
      <ColorDropdown
        onSelectedChange={setSelectedColor}
        options={colorListData}
        selected={selectedColor}
      />
      <Dropdown
        onSelectedChange={setSelectedColor}
        options={colorData}
        selected={selectedColor}
      />
    </div>
  );
};

function PageMockAPI() {
  return (
    <div>
      <h2 className="ui dividing header">Mock API - User List</h2>
      <UserList />
    </div>
  );
};

function PageTranslate() {
  return (
    <div>
      <h2 className="ui dividing header">Google Translate</h2>
      <Translate />
    </div>
  );
};

function PageWikipediaSearch() {
  return (
    <div>
      <h2 className="ui dividing header">Wikipedia Search</h2>
      <p className="ui text spacebelow">Use the Wikipedia API to return article content relating to a user's serch term.</p>
      <Search />
    </div>
  );
};

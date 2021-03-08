import React, { useState } from 'react';
import Accordion from './components/Accordion';
import ButtonCounter from './components/ButtonCounter';
// TODO: Refactor back into organism with dropdown and result
import ColorDropdown from './components/ColorDropdown';
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import UserList from "./components/UserList";
// Example Data
import { colorData, colorListData } from "./data/colors";
import { dadJokes } from "./data/dadJokes";
import "./App.css";
import Translate from "./components/Translate";


export default () => {
  const [selectedColor, setSelectedColor] = useState(colorListData[0]);

  return (
    <main className="ui container">
      <h1>React Hook Playground</h1>
      <h2 className="ui dividing header">Mock User List from API</h2>
      <UserList/>

      <h2 className="ui dividing header">Translate Organism</h2>
      <Translate/>

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

      <h2 className="ui dividing header">Search</h2>
      <Search />

      <h2 className="ui dividing header">Accordion</h2>
      <Accordion items={dadJokes} />

      <h2 className="ui dividing header">Button Counter</h2>
      <ButtonCounter />
    </main>
  );
};

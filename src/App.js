import React from 'react';
import Accordion from './components/Accordion';
import ButtonCounter from './components/ButtonCounter';
import Search from './components/Search';
import './App.css';

const items = [
  {
    title: 'Why did the math book look so sad?',
    content: 'Because of all of its problems!'
  },
  {
    title: 'Why are elevator jokes so classic and good?',
    content: 'They work on many levels.'
  },
  {
    title: 'How do you organize a space party?',
    content: 'You planet.'
  },
];

export default () => {
  return (
    <main className="ui container">
      <h1>React Hook Playground</h1>
      <h2 className="ui dividing header">Search</h2>
      <Search />

      <h2 className="ui dividing header">Accordion</h2>
      <Accordion items={items} />

      <h2 className="ui dividing header">Button Counter</h2>
      <ButtonCounter />
    </main>
  );
};

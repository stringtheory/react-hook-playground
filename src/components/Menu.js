import React, { useState, useEffect } from 'react';

const Menu = () => {

    return (
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/accordion">Accordion</a></li>
          <li><a href="/counter">Counter</a></li>
          <li><a href="/dropdown">Dropdown</a></li>
          <li><a href="/mock-api">Mock API</a></li>
          <li><a href="/translate">Google Translate</a></li>
          <li><a href="/wikipedia-seach">Wikipedia Search</a></li>
        </ul>
    );
};

export default Menu;
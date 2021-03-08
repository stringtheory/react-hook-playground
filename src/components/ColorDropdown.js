import React, { useState, useEffect, useRef } from 'react';

const ColorDropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {

    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        style={{ background: option.color }}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  });

  return (
    <form ref={ref} className="ui form spaceafter">
      <div className="ui field">
        <label className="label">Select a Munsell Color</label>
        <div onClick={() => setOpen(!open)}
             style={{ background: selected.value }}
             className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            { renderedOptions }
          </div>
        </div>
      </div>
    </form>
  );
};

export default ColorDropdown;
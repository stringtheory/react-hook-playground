import React, { useState } from 'react';

const ButtonCounter = () => {
    const [count, setCount] = useState(0);

    const onButtonUpClick = (count) => {
        setCount(count + 1);
    };

    return (
      <section className="ui horizontal list">
        <div className="item">
          <div
            className="ui black button animated"
            onClick={() => onButtonUpClick(count)}
          >
            <div class="visible content">Count Up</div>
            <div class="hidden content">
              <i class="arrow up icon"></i>
            </div>
          </div>
        </div>
        <div className="item">
          <p>Current Count: </p>
        </div>
        <div className="item">
          <h3>{count}</h3>
        </div>
      </section>
    );
};

export default ButtonCounter;

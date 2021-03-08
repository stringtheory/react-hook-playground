import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import ConvertLanguage from "./ConvertLanguage";

const options = [
  {
    label: 'Afrikans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
];

const Translate = () => {
  const [language, selectedLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>Enrter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={options}
        label="Select a Language"
        selected={language}
        onSelectedChange={selectedLanguage}
      />
      <div className="ui divider"></div>
      <h3 className="ui header">Output:</h3>
      <ConvertLanguage language={language} text={text} />
    </div>
  );
};

export default Translate;

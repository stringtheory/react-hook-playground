import React, {useState} from 'react';
import Dropdown from "./Dropdown";

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
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)} />
      <Dropdown
        options={options}
        label="Select a Language"
        selected={language}
        onSelectedChange={selectedLanguage}
      />
    </div>
  );
};

export default Translate;

import React, {useState, useEffect} from 'react';
import axios from "axios";

// Note this is a temp API key that only works on http://localhost:3000/
const GoogleTranslateAPIKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const ConvertLanguage = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: GoogleTranslateAPIKey
          }
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language,  debouncedText]);

 return (
  <div>
    <h1 className="ui header">{translated}</h1>
  </div>
 )
};

export default ConvertLanguage;
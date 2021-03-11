import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async() => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });

      setResults(data.query.search);
    }

    if (term && !results.length) {
      search();
    } else {
      const timeoutID = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutID);
      };
    }

  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui mini  button"
             href={`https://en.wikipedia.org?curid=${result.pageid}`}
             target="_blank"
          >
            <i className="linkify icon"></i>
            Visit
          </a>
        </div>
        <div className="content">
          <div className="ui small header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html:result.snippet }}></span>
        </div>
      </div>
    )
  });

  return (
    <React.Fragment>
      <div className="ui container">
        <div className="ui form raised very padded black segment">
          <div className="field">
            <label>Enter Search Term</label>
            <div className="ui large icon input">
              <input value={term}
                     placeholder="cat, flower, taco...."
                     onChange={(e) => setTerm(e.target.value)}
                     className="ui input"
              />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="ui container">
        <div className="ui relaxed divided list">{renderedResults}</div>
      </div>
    </React.Fragment>
  );
};

export default Search;

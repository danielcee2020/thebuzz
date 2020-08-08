import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/Search.js';
import Results from './components/Results.js';
import Popup from './components/Popup.js';

function App() {
  const api = {
    key: "Insert News API key here",
    base: "https://newsapi.org/v2/everything?"
  }

  const [query, setQuery] = useState("");
  const [buzz, setBuzz] = useState({});
  const [selected, setSelected] = useState(undefined);

  function searchHandler(e) {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    if(e.key === "Enter") {
      fetch(api.base + "q=" + query + "&from=" + year + "-" + month + "-01&language=en&sortBy=relevancy&apiKey=" + api.key)
      .then(result => result.json())
      .then(result => {
        setBuzz(result);
        setQuery("");
      });
    }
  }

  function handleInput(e) {
    let s = e.target.value;
    setQuery(s);
  }

  function openPopup(result) {
    setSelected(result);
  }

  function closePopup() {
    setSelected(undefined);
  }

  if(typeof selected != "undefined") {
    return (
      <Popup result={selected} closePopup={closePopup}/>
    );
  } else {
    return (
      <React.Fragment>
        <header>
          <h1 className="homeHeading">The Buzz</h1>
        </header>
        <main>
          <Search handleInput={handleInput} searchHandler={searchHandler} />
          {typeof buzz.articles != "undefined" ? <Results results={buzz} openPopup={openPopup} /> : " "}
        </main>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

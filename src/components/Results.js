import React from 'react';
import Result from '../components/Result.js';

function Results({ results, openPopup }) {
  return (
    <section>
      {results.articles.map((result) => (
        <Result key={result.url} result={result} openPopup={openPopup}/>
      ))}
    </section>
  );
}

export default Results;

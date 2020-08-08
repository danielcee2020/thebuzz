import React from 'react';

function Result({ result, openPopup }) {

  return (
    <React.Fragment>
      <section className="resultWrapper" onClick={() => openPopup(result)}>
        <h1 className="resultHeading">{result.title}</h1>
        <img className="resultImage" src={result.urlToImage} />
        <p className="resultParagraph">{result.description}</p>
      </section>
      <div className="gradientBorder">
      </div>
    </React.Fragment>
  );
}

export default Result;

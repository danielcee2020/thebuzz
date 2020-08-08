import React from 'react';

function Popup({ result, closePopup }) {
  return (
    <React.Fragment>
      <section className="popupWrapper">
        <img className="popupImage" src={result.urlToImage} />
        <div className="detailsWrapper">
          <h1 className="popupHeading">{result.title}</h1>
          <h2 className="popupAuthor">{result.author}</h2>
          <p className="popupParagraph">{result.description}</p>
          <div className="buttonsWrapper">
            <a className="popupReadMore" href={result.url}>Read More...</a>
            <button className="popupClose" onClick={closePopup}>Close</button>
          </div>
        </div>
      </section>
      <div className="gradientBorder">
      </div>
    </React.Fragment>
  );
}

export default Popup;

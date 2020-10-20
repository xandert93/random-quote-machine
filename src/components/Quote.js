import React from "react";
import { ColorConsumer } from "../context/ColorContext";

function Quote({ quote, authorName }) {
  return (
    <ColorConsumer>
      {(randomColor) => (
        <div>
          <div className="quote-text">
            <i className="fa fa-quote-left" style={{ color: randomColor }}></i>
            <span id="text" style={{ color: randomColor }}>
              {quote}
            </span>
          </div>
          <div className="quote-author">
            <span id="author" style={{ color: randomColor }}>
              - {authorName}
            </span>
          </div>
        </div>
      )}
    </ColorConsumer>
  );
}

export default Quote;

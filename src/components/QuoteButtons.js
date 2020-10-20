import React from "react";
import { ColorConsumer } from "../context/ColorContext";

function QuoteButtons({ getQuote }) {
  return (
    <ColorConsumer>
      {(randomColor) => (
        <div className="buttons-container">
          <div className="social-media-buttons-container">
            <button style={{ background: randomColor }}>
              <a
                id="tweet-quote"
                title="Tweet this quote!"
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </button>
            <button style={{ background: randomColor }}>
              <a
                id="tumblr-quote"
                title="Share on Instagram!"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </button>
            <button style={{ background: randomColor }}>
              <a
                id="tumblr-quote"
                title="Post on Facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </button>
          </div>

          <div className="quote-button-container">
            <button
              className="shuffle"
              title="Shuffle"
              onClick={getQuote}
              style={{ background: randomColor }}
            >
              <i className="fas fa-random"></i>
            </button>
          </div>
        </div>
      )}
    </ColorConsumer>
  );
}

export default QuoteButtons;

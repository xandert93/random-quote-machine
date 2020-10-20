import React from "react";
import Quote from "./Quote";
import QuoteButtons from "./QuoteButtons";

function QuoteBox({ quote, authorName, getQuote }) {
  return (
    <div id="quote-box" className="quote-box">
      <Quote quote={quote} authorName={authorName} />
      <QuoteButtons getQuote={getQuote} />
    </div>
  );
}

export default QuoteBox;

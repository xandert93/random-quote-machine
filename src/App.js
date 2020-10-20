import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import QuoteBox from "./components/QuoteBox";
import Footer from "./components/Footer";
import { ColorProvider } from "./context/ColorContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      authorName: "",
      randomColor: "white",
    };
  }

  componentDidMount() {
    this.getQuote();
    document.body.addEventListener("keypress", (e) => {
      e.keyCode === 13 && this.getQuote();
    });
  }

  getQuote = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let quoteNum = Math.ceil(Math.random() * 100);
        this.setState({
          quote: data.quotes[quoteNum].quote,
          authorName: data.quotes[quoteNum].author,
          randomColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        });
      });
  };

  render() {
    let { quote, authorName, randomColor } = this.state;
    return (
      <div id="wrapper" style={{ background: randomColor }}>
        <ColorProvider value={randomColor}>
          <Header />
          <QuoteBox
            quote={quote}
            authorName={authorName}
            getQuote={this.getQuote}
          />
          <Footer />
        </ColorProvider>
      </div>
    );
  }
}

export default App;

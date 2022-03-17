import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Header from "./components/header/header.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      searchString: "",
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch(
      "https://api.nytimes.com/svc/news/v3/content/nyt/technology.json?api-key=GWB5GcO65IUDqMB5hjRqBiBeo7XLrmZh"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return { articles: data.results };
        })
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { articles, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredArticles = articles.filter((article) => {
      return article.title.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <Header />
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search here.. "
        />
        <CardList articles={filteredArticles} />
      </div>
    );
  }
}

export default App;

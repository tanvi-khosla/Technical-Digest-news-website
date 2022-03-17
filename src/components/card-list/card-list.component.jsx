import { Component } from "react";

class CardList extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div className="card-list">
        {articles.map((article) => {
          return (
            <a
              href={article.url}
              className="card-container"
              key={article.slug_name}
            >
              <img alt="thumbnail" src={`${article.thumbnail_standard}`} />
              <h3>{article.title}</h3>
              <h5>{article.abstract}</h5>
              <p>{article.byline}</p>
            </a>
          );
        })}
      </div>
    );
  }
}

export default CardList;

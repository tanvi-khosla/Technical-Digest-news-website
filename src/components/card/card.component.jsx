import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { slug_name, url, title, abstract, byline, thumbnail_standard } =
      this.props.article;

    return (
      <a href={url} className="card-container" key={slug_name}>
        <img alt="thumbnail" src={`${thumbnail_standard}`} />
        <h3>{title}</h3>
        <h5>{abstract}</h5>
        <p>{byline}</p>
      </a>
    );
  }
}

export default Card;

import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className={`header`}>
        <div className={`title`}>Technical Digest</div>
        <div className={`sub-title`}>
          An up-to-the-minute stream of tech related articles published by the
          NYT
        </div>
      </div>
    );
  }
}

export default Header;

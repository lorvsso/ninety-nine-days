import React from "react";
import { Link } from "gatsby";

class GridItem extends React.Component {
  render() {
    return (
      <div className="item bb-0" key={this.props.key}>
        <div className="item-overlay" />
        <img src={this.props.featuredImage} alt="" />
        <div className="item-details">
          <h2 className="item-title f4 normal mb1">
            <Link
              className="link white"
              key={this.props.key}
              to={this.props.link}
            >
              {this.props.title}
            </Link>
          </h2>
          <Link
            className="link white f5 mb3 lh-solid"
            key={this.props.key}
            to={this.props.link}
          >
            {this.props.description}
          </Link>
        </div>
      </div>
    );
  }
}

export default GridItem;

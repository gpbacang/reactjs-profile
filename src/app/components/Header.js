import React from "react";

export class Header extends React.Component {
  render() {
    return(
      <div id="header">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

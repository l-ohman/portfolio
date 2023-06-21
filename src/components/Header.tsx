import React from "react";

const headerLinks = ["about", "projects", "skills", "contact"];

export default function Header() {
  return (
    <div id="header-links">
      {headerLinks.map((link, i) => (
        <div key={i}>
          <p>{link}</p>
        </div>
      ))}
    </div>
  );
}

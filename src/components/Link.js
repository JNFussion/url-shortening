import React from "react";

function Link({ fullURL, shortURL }) {
  function handleClick(e) {
    navigator.clipboard.writeText(shortURL);
    e.target.textContent = "Copied!";
  }

  return (
    <article className="flex justify-between items-center p-2 my-2 rounded bg-white">
      <h3>{fullURL}</h3>
      <p>
        <a href={shortURL} className="mx-4 text-cyan">
          {shortURL}
        </a>
        <button className="btn rounded" onClick={handleClick}>
          Copy
        </button>
      </p>
    </article>
  );
}

export default Link;

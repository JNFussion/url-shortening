import React from "react";

function Link({ fullURL, shortURL }) {
  function handleClick(e) {
    navigator.clipboard.writeText(shortURL);
    e.target.textContent = "Copied!";
  }

  return (
    <article className="flex flex-wrap justify-center md:justify-between items-center p-2 my-2 rounded overflow-hidden bg-white">
      <h3>{fullURL}</h3>
      <p>
        <a href={shortURL} className="mx-4 text-cyan">
          {shortURL}
        </a>
        <button
          className="block md:inline-block mx-auto btn rounded"
          onClick={handleClick}
        >
          Copy
        </button>
      </p>
    </article>
  );
}

export default Link;

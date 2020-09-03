import React, { useState, useEffect } from "react";
import "./styles.css";

// https://media-exp1.licdn.com/dms/image/C5603AQF9qI8Q086MeA/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=V8bwGglEF1mdwXUFk1THnZvU4UIcM3_wP1W_kvMNJog
export default function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let time = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(time);
  });

  return (
    <div className="card">
      <div
        className={
          showContent === false ? "card-header animated-bg" : "card-header"
        }
      >
        <img
          style={{
            display: showContent === true ? "block" : "none"
          }}
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt="header"
        />
      </div>

      <div className="card-content">
        <h3
          className={
            "card-title" +
            (showContent === false ? " animated-bg animated-bg-text" : "")
          }
        >
          {showContent === true ? "Lorem ipsum dolor sit amet" : "\u00A0"}
        </h3>
        <p className="card-excerpt">
          {showContent === true ? (
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sint."
          ) : (
            <>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
            </>
          )}
        </p>
        <div className="author">
          <div
            className={
              "profile-img" + (showContent === true ? "" : " animated-bg")
            }
          >
            {showContent === true ? (
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQF9qI8Q086MeA/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=V8bwGglEF1mdwXUFk1THnZvU4UIcM3_wP1W_kvMNJog"
                alt="Karthick Profile"
              />
            ) : (
              "\u00A0"
            )}
          </div>

          <div className="author-info">
            <strong
              className={
                showContent === true ? "" : "animated-bg animated-bg-text"
              }
            >
              {showContent === true ? "Karthick Rajan" : "\u00A0"}
            </strong>
            <small
              className={
                showContent === true ? "" : "animated-bg animated-bg-text"
              }
            >
              {showContent === true
                ? new Date().toDateString().slice(4)
                : "\u00A0"}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import useDimensions from "../../services/useDimensions";

export default function NavTest() {
  let size = useDimensions();
  const [showMenu, setShowMenu] = React.useState(false);

  return size.width < 992 ? (
    <>
      <svg
        fill="var(--primary-color, green)"
        viewBox="0 0 100 100"
        width="50"
        style={{
          cursor: "pointer",
          display: showMenu ? "none" : "block",
        }}
        onClick={() => {
          setShowMenu(!showMenu);
          console.log(showMenu);
        }}
      >
        <rect width="80" height="5" x="10" y="25" rx="5"></rect>
        <rect width="80" height="5" x="10" y="45" rx="5"></rect>
        <rect width="80" height="5" x="10" y="65" rx="5"></rect>
      </svg>
      <div
        className={showMenu ? "AnimationIn" : "AnimationOut"}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100vh",
          width: size.width < 400 ? "100vw" : 350,
          backgroundColor: "red",
        }}
      >
        {/* Temp button */}
        <svg>
          <rect width="40" height="5" x="10" y="25" rx="5" />
          <rect width="40" height="5" x="10" y="45" rx="5" />
        </svg>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            listStyle: "none",
            gap: 15,
          }}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Over mij</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">test</a>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          gap: 15,
        }}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Over mij</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">test</a>
        </li>
      </ul>
    </>
  );
}

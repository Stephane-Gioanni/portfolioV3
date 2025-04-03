// Component/MobileNav.js
"use client";

import Link from "next/link";

// Navigation mobile simplifiée sans module CSS
export default function MobileNav() {
  const navStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#121212",
    padding: "15px",
    zIndex: 100,
    borderTop: "1px solid #333",
  };

  const navInnerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const navItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "18px",
    padding: "10px",
    color: "#eaeff2",
  };

  return (
    <nav style={navStyle}>
      <div style={navInnerStyle}>
        <Link href="/" style={navItemStyle}>
          <p>hey</p>
          <span>Home</span>
        </Link>
        <Link href="/work" style={navItemStyle}>
          <span>Work</span>
        </Link>
        <Link href="/about" style={navItemStyle}>
          <span>About</span>
        </Link>
        <Link href="/contact" style={navItemStyle}>
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
}

import React from "react";

const isBrowser = typeof document === "object";

export default function App() {
  return (
    <div
      style={{
        height: "500px",
        backgroundColor: isBrowser ? "skyblue" : "red"
      }}
    >
      {isBrowser ? "browser" : "server"}
    </div>
  );
}

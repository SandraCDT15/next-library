// src/client/Button.tsx
import { useState } from "react";
function Button({ children }) {
  const [clicked, setClicked] = useState(false);
  return /* @__PURE__ */ React.createElement("button", { onClick: () => setClicked(true) }, clicked ? "Clicked!" : children);
}

// src/server/Banner.tsx
function Banner() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Hola"));
}
export {
  Banner,
  Button
};

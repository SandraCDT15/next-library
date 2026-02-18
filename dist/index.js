// src/client/Button.tsx
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
function Button({ children }) {
  const [clicked, setClicked] = useState(false);
  return /* @__PURE__ */ jsx("button", { onClick: () => setClicked(true), children: clicked ? "Clicked!" : children });
}

// src/server/Banner.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Banner() {
  return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2("h2", { children: "Hola" }) });
}
export {
  Banner,
  Button
};

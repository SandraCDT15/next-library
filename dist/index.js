// src/client/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({
  action,
  title,
  active
}) {
  return /* @__PURE__ */ jsx("button", { disabled: !active, onClick: () => console.log(action), children: title });
}

// src/server/Banner.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Banner({
  title,
  description,
  backgroundColor,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { style: { backgroundColor }, children: [
    /* @__PURE__ */ jsx2("h1", { children: title }),
    /* @__PURE__ */ jsx2("p", { children: description }),
    children
  ] });
}
export {
  Banner,
  Button
};

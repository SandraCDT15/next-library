import { jsx, jsxs } from "react/jsx-runtime";
function Banner({
  title,
  description,
  backgroundColor,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { style: { backgroundColor }, children: [
    /* @__PURE__ */ jsx("h1", { children: title }),
    /* @__PURE__ */ jsx("p", { children: description }),
    children
  ] });
}
export {
  Banner
};

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Banner: () => Banner,
  Button: () => Button
});
module.exports = __toCommonJS(index_exports);

// src/client/Button.tsx
var import_react = require("react");
function Button({ children }) {
  const [clicked, setClicked] = (0, import_react.useState)(false);
  return /* @__PURE__ */ React.createElement("button", { onClick: () => setClicked(true) }, clicked ? "Clicked!" : children);
}

// src/server/Banner.tsx
function Banner() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Hola"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Banner,
  Button
});

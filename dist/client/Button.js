"use client";
import { jsx } from "react/jsx-runtime";
function Button({
  action,
  title,
  active
}) {
  return /* @__PURE__ */ jsx("button", { disabled: !active, onClick: () => console.log(action), children: title });
}
export {
  Button
};

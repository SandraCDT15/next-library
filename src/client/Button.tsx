"use client";

export function Button({
  action,
  title,
  active,
}: {
  action: string;
  title: string;
  active: boolean;
}) {
  return (
    <button disabled={!active} onClick={() => console.log(action)}>
      {title}
    </button>
  );
}

import { Button } from "../client/Button";

interface BannerProps {
  title: string;
  description: string;
  backgroundColor: string;
  children: React.ReactNode;
}

export function Banner({
  title,
  description,
  backgroundColor,
  children,
}: BannerProps) {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
}

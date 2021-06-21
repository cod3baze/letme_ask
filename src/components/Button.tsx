import { FC } from "react";

type ButtonProps = {
  text?: string;
};

const Button: FC<ButtonProps> = ({ text }) => {
  return <button type="button">{text || "Default"}</button>;
};

export { Button };

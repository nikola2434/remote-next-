import { FC } from "react";
import { IButton } from "./Button.interface";
import style from "./Button.module.scss";

const Button: FC<IButton> = ({ children, ...rest }) => {
  return (
    <button className={style.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;

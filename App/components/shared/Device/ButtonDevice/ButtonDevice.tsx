import { FC } from "react";
import style from "./ButtonDevice.module.scss";
import cn from "classnames";
import { IButtonDevice } from "./ButtonDevice.interface";

const ButtonDevice: FC<IButtonDevice> = ({ button, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className={cn(style.default, {
        [style.green]: button.style === "green",
        [style.grey]: button.style === "grey",
      })}
    >
      {button.title}
    </button>
  );
};

export default ButtonDevice;

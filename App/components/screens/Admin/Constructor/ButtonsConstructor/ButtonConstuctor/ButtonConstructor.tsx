import { IButtonDevices } from "@/App/shared/interfaces/device.interface";
import { FC } from "react";
import style from "./ButtonConstructor.module.scss";
import cn from "classnames";
import { useDrag } from "react-dnd";
import { BUTTON_DRAG_CONSTRUCTOR } from "@/App/shared/constants/constants";

const ButtonConstructor: FC<{ button: IButtonDevices }> = ({ button }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BUTTON_DRAG_CONSTRUCTOR,
    item: { ...button },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));
  return (
    <div
      ref={drag}
      className={cn(style.default, {
        [style.green]: button.style === "green",
        [style.grey]: button.style === "grey",
      })}
    >
      {button.title}
    </div>
  );
};

export default ButtonConstructor;

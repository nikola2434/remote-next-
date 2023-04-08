import { FC, PropsWithChildren } from "react";
import Portal from "../../Providers/Portal/Portal";
import cn from "classnames";
import style from "./Modal.module.scss";

interface IModalProps {
  isActive: boolean;
  setIsActive: (prev: boolean) => void;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  isActive,
  setIsActive,
  children,
}) => {
  return (
    <Portal>
      <div
        onClick={() => setIsActive(false)}
        className={cn(style.modal, { [style.modal_active]: isActive })}
      >
        <div className={style.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

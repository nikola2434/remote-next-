import { IButtonDevices } from "@/App/shared/interfaces/device.interface";
import { FC, useState } from "react";
import style from "./BusyField.module.scss";
import cn from "classnames";
import Modal from "@/App/components/UI/Modal/Modal";
import UpdateButtonDeviceForm from "./UpdateButtonDeviceForm/UpdateButtonDeviceForm";
import {
  TypeDeleteButtonDevice,
  TypeCreateButtonDevice,
} from "../useLineButtons.inderface";

interface IBusyFieldProps {
  button: IButtonDevices;
  index: number;
  lineNumber: number;
  idSection: string;
  createButtonDevice: TypeCreateButtonDevice;
  deleteButtonDevice: TypeDeleteButtonDevice;
}

const BusyField: FC<IBusyFieldProps> = (props) => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  return (
    <div className={style.busy_field} onClick={() => setIsActiveModal(true)}>
      <div
        className={cn(style.button, {
          [style.button_green]: props.button.style === "green",
          [style.button_grey]: props.button.style === "grey",
        })}
      >
        {props.button.title}
      </div>
      <Modal isActive={isActiveModal} setIsActive={setIsActiveModal}>
        <UpdateButtonDeviceForm {...props} setActiveModal={setIsActiveModal} />
      </Modal>
    </div>
  );
};

export default BusyField;

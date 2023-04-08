import MaterialIcon from "@/App/components/UI/MaterialIcon/MaterialIcon";
import Modal from "@/App/components/UI/Modal/Modal";
import { BUTTON_DRAG_CONSTRUCTOR } from "@/App/shared/constants/constants";
import {
  IButtonDevices,
  TypeStyleButtonDevice,
} from "@/App/shared/interfaces/device.interface";
import { FC, useState } from "react";
import { useDrop } from "react-dnd";
import { TypeCreateButtonDevice } from "../useLineButtons.inderface";
import CreateButtonDeviceForm from "./CreateButtonDeviceForm/CreateButtonDeviceForm";
import style from "./EmptyField.module.scss";

interface IEmptyFieldProps {
  lineNumber: number;
  index: number;
  idSection: string;
  createButtonDevice: TypeCreateButtonDevice;
}

const EmptyField: FC<IEmptyFieldProps> = (props) => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [styleButton, setStyleButton] =
    useState<TypeStyleButtonDevice>("default");

  const [{ isOVer }, drop] = useDrop(() => ({
    accept: BUTTON_DRAG_CONSTRUCTOR,
    drop: (item: IButtonDevices) => {
      setStyleButton(item.style);
      setIsActiveModal(true);
    },
    collect: (monitor) => ({ isOVer: !!monitor.isOver() }),
  }));
  return (
    <>
      <div
        ref={drop}
        className={style.empty_field}
        onClick={() => setIsActiveModal(true)}
        style={isOVer ? { opacity: 0.5 } : {}}
      >
        <MaterialIcon name="MdAdd" />
      </div>
      <Modal isActive={isActiveModal} setIsActive={setIsActiveModal}>
        <CreateButtonDeviceForm
          {...props}
          setActiveModal={setIsActiveModal}
          styleButton={styleButton}
        />
      </Modal>
    </>
  );
};

export default EmptyField;

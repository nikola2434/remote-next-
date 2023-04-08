import MaterialIcon from "@/App/components/UI/MaterialIcon/MaterialIcon";
import { ISectionButtons } from "@/App/shared/interfaces/device.interface";
import { FC } from "react";
import { ControllerRenderProps } from "react-hook-form";
import style from "./ControlBlockDevice.module.scss";
import SectionsConstructor from "./SectonsConstructor/SectionsConstructor";

interface IControlBlockDeviceProps {
  addSection: () => void;
  removeSection: (id: string) => void;
  field: ControllerRenderProps<any, any>;
  buttons: ISectionButtons[];
}

const ControlBlockDevice: FC<IControlBlockDeviceProps> = ({
  field,
  addSection,
  removeSection,
  buttons,
}) => {
  return (
    <div className={style.container}>
      <div>
        {buttons.map((section) => (
          <SectionsConstructor
            removeSections={removeSection}
            section={section}
            key={section.idSection}
            field={field}
          />
        ))}
      </div>

      <button type="button" onClick={addSection}>
        <div>
          <MaterialIcon name="MdAddCircle" />
        </div>
      </button>
    </div>
  );
};

export default ControlBlockDevice;

import MaterialIcon from "@/App/components/UI/MaterialIcon/MaterialIcon";
import { ISectionButtons } from "@/App/shared/interfaces/device.interface";
import { FC } from "react";
import { ControllerRenderProps } from "react-hook-form";
import LineButtons from "./LineButtons/LineButtons";
import style from "./SectionConstructor.module.scss";
import { useSectionConstructor } from "./useSectionConstructor";

interface ISectionConstructorProps {
  section: ISectionButtons;
  removeSections: (id: string) => void;
  field: ControllerRenderProps<any, any>;
}

const SectionsConstructor: FC<ISectionConstructorProps> = ({
  section,
  removeSections,
  field,
}) => {
  const {
    addLineButtons,
    removeLineButtons,
    addColumnButtons,
    removeColumnButtons,
  } = useSectionConstructor(field);

  return (
    <div className={style.container}>
      <button type="button" onClick={() => removeSections(section.idSection)}>
        <MaterialIcon name="MdRemove" />
      </button>
      <div className={style.fields}>
        {section.buttons.map((item, index) => (
          <LineButtons
            buttons={item}
            key={index}
            lineNumber={index}
            idSection={section.idSection}
            field={field}
          />
        ))}
      </div>
      <div className={style.buttons}>
        <button
          type="button"
          onClick={() => removeLineButtons(section.idSection)}
          className={style.top_button}
        >
          <MaterialIcon name="MdRemove" />
        </button>
        <button
          type="button"
          onClick={() => addColumnButtons(section.idSection)}
          className={style.right_button}
        >
          <MaterialIcon name="MdAdd" />
        </button>
        <button
          type="button"
          onClick={() => addLineButtons(section.idSection)}
          className={style.bottom_button}
        >
          <MaterialIcon name="MdAdd" />
        </button>
        <button
          type="button"
          onClick={() => removeColumnButtons(section.idSection)}
          className={style.left_button}
        >
          <MaterialIcon name="MdRemove" />
        </button>
      </div>
    </div>
  );
};

export default SectionsConstructor;

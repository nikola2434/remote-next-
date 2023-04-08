import { ISectionButtons } from "./../../../../../shared/interfaces/device.interface";

import { ControllerRenderProps } from "react-hook-form";

export const useConstructor = (field: ControllerRenderProps<any, any>) => {
  const addSection = () => {
    field.onChange([
      ...field.value,
      {
        buttons: [[null, null]],
        idSection: String(Math.random()),
      } as ISectionButtons,
    ]);
  };

  const removeSection = (id: string) => {
    field.onChange([
      ...(field.value as ISectionButtons[]).filter(
        (section) => section.idSection !== id
      ),
    ]);
  };

  return {
    addSection,
    removeSection,
  };
};

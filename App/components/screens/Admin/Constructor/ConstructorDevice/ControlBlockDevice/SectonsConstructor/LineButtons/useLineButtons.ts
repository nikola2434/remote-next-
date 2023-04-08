import {
  IButtonDevices,
  ISectionButtons,
} from "./../../../../../../../../shared/interfaces/device.interface";
import { ControllerRenderProps } from "react-hook-form";

export const useLineButtons = (field: ControllerRenderProps<any, any>) => {
  const createButtonDevice = (
    data: IButtonDevices,
    idSection: string,
    lineNumber: number,
    index: number
  ) => {
    const section = (field.value as ISectionButtons[]).find(
      (section) => section.idSection === idSection
    );
    if (!section) return;

    field.onChange([
      ...(field.value as ISectionButtons[]).map((section) =>
        section.idSection !== idSection
          ? section
          : {
              ...section,
              buttons: [
                ...section.buttons.map((item, lineInd) => {
                  return lineInd === lineNumber
                    ? [
                        ...item.map((button, ind) => {
                          return ind === index ? { ...data } : button;
                        }),
                      ]
                    : [...item];
                }),
              ],
            }
      ),
    ]);
  };

  const deleteButtonDevice = (
    idSection: string,
    lineNumber: number,
    index: number
  ) => {
    const section = (field.value as ISectionButtons[]).find(
      (section) => section.idSection === idSection
    );
    if (!section) return;

    field.onChange([
      ...(field.value as ISectionButtons[]).map((section) =>
        section.idSection !== idSection
          ? section
          : {
              ...section,
              buttons: [
                ...section.buttons.map((item, lineInd) => {
                  return lineInd === lineNumber
                    ? [
                        ...item.map((button, ind) => {
                          return ind === index ? null : button;
                        }),
                      ]
                    : [...item];
                }),
              ],
            }
      ),
    ]);
  };

  return { createButtonDevice, deleteButtonDevice };
};

import { TypeStyleButtonDevice } from "@/App/shared/interfaces/device.interface";

export interface IButtonOptions {
  label: string;
  value: TypeStyleButtonDevice;
}

export const buttonsOptionData: IButtonOptions[] = [
  { label: "Обычная", value: "default" },
  { label: "Серая", value: "grey" },
  { label: "Зелёная", value: "green" },
];

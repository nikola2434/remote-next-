import { IButtonDevices } from "./../../../../../../../../shared/interfaces/device.interface";

export type TypeCreateButtonDevice = (
  data: IButtonDevices,
  idSection: string,
  lineNumber: number,
  index: number
) => void;

export type TypeDeleteButtonDevice = (
  idSection: string,
  lineNumber: number,
  index: number
) => void;

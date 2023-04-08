import { ButtonHTMLAttributes } from "react";
import { IButtonDevices } from "./../../../../shared/interfaces/device.interface";

interface IButtonDeviceProps {
  button: IButtonDevices;
}

type TypeHtmlButton = ButtonHTMLAttributes<HTMLButtonElement> &
  IButtonDeviceProps;

export interface IButtonDevice extends TypeHtmlButton {}

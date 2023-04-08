export interface IButtonDevices {
  id: string;
  title: string;
  style: TypeStyleButtonDevice;
}

export type TypeStyleButtonDevice = "green" | "grey" | "default";

export type TypeButtons = IButtonDevices | null;

export interface ISectionButtons {
  idSection: string;
  buttons: TypeButtons[][];
}

export interface IInstrumentsButtons {
  name: string;
  id: string;
  sections: ISectionButtons[];
}

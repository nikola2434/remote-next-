import { ISectionButtons } from "@/App/shared/interfaces/device.interface";

export const oscilloscope: ISectionButtons[] = [
  {
    idSection: "1",
    buttons: [
      [
        { id: "", style: "default", title: "Это" },
        { id: "", style: "default", title: "какой-то" },
        { id: "", style: "default", title: "прибор" },
      ],
    ],
  },
  {
    idSection: "2",
    buttons: [
      [null, { id: "", style: "grey", title: "^" }, null],
      [
        { id: "", style: "grey", title: "<" },
        { id: "", style: "grey", title: "&" },
        { id: "", style: "grey", title: ">" },
      ],
    ],
  },
];

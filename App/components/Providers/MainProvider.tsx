import { FC, PropsWithChildren } from "react";
import DragProvider from "./DragProvider/DragProvider";

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return <DragProvider>{children}</DragProvider>;
};

export default MainProvider;

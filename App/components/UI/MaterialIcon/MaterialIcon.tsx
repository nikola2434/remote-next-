import { typeMaterialIconName } from "@/App/shared/interfaces/icons.interface";
import { FC } from "react";
import * as Icons from "react-icons/md";

const MaterialIcon: FC<{ name: typeMaterialIconName }> = ({ name }) => {
  const IconComponent = Icons[name];
  
  return <IconComponent />;
};

export default MaterialIcon;

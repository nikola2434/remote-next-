import { FC } from "react";
import style from "./Heading.module.scss";

const Heading: FC<{ title: string }> = ({ title }) => {
  return <h1 className={style.h1}>{title}</h1>;
};

export default Heading;

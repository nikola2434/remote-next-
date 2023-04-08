import { FC, forwardRef, useState } from "react";
import { IField } from "./Field.interface";
import style from "./Field.module.scss";
import cn from "classnames";

const Field: FC<IField> = forwardRef<HTMLInputElement, IField>(
  ({ error, placeholder, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <div className={style.field}>
        <input
          ref={ref}
          {...rest}
          required
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <span>{placeholder}</span>
        <div
          className={cn(style.line, {
            [style.isFocus]: isFocused,
            [style.line_error]: !!error,
          })}
        />
        {error && <div className={style.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;

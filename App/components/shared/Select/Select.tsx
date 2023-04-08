import { FC, useState } from "react";
import { OnChangeValue } from "react-select/dist/declarations/src";
import { IOption, ISelect } from "./Select.interface";
import style from "./Select.module.scss";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import cn from "classnames";

const AnimatedComponents = makeAnimated();

const Select: FC<ISelect> = ({
  field,
  isLoading,
  isMulti,
  options,
  placeholder,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
    field.onChange(
      isMulti
        ? (newValue as IOption[]).map((val) => val.value)
        : (newValue as IOption).value
    );
    setIsFocused(false);
  };

  const getValues = () => {
    if (field.value) {
      return isMulti
        ? options.filter((item) => field.value.includes(item.value))
        : options.find((item) => field.value === item.value);
    } else return isMulti ? [] : "";
  };

  return (
    <div className={style.select}>
      <span>{placeholder}</span>
      <ReactSelect
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        isLoading={isLoading}
        classNamePrefix="custom-select"
        value={getValues()}
        options={options}
        isMulti={isMulti}
        onChange={onChange}
        components={AnimatedComponents}
      />
      <div
        className={cn(style.line, {
          [style.isFocus]: isFocused,
          [style.line_error]: !!error,
        })}
      />
      {error && <div className={style.error}>{error.message}</div>}
    </div>
  );
};

export default Select;

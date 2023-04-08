import { Options } from "react-select";
import { ControllerRenderProps, FieldError } from "react-hook-form";

export interface IOption {
  label: string;
  value: string | boolean;
}

interface IFieldProps {
  placeholder: string;
  error?: FieldError;
}

export interface ISelect extends IFieldProps {
  options: Options<IOption>;
  field: ControllerRenderProps<any, any>;
  isMulti: boolean;
  isLoading: boolean;
}

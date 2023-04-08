import {
  IButtonDevices,
  TypeStyleButtonDevice,
} from "@/App/shared/interfaces/device.interface";
import Field from "@/App/components/shared/Field/Field";
import { FC, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import style from "./CreateButtonDeviceForm.module.scss";
import { DynamicSelector } from "@/App/components/screens/Admin/Constructor/Constructor";
import { buttonsOptionData } from "./StyleButtonsSelect.data";
import Button from "@/App/components/UI/Button/Button";
import { stopPropagate } from "@/App/utils/stopPropagate.utils";
import { TypeCreateButtonDevice } from "../../useLineButtons.inderface";

interface ICreateButtonDeviceFormProps {
  createButtonDevice: TypeCreateButtonDevice;
  setActiveModal: (prev: boolean) => void;
  idSection: string;
  lineNumber: number;
  index: number;
  styleButton: TypeStyleButtonDevice;
}

const CreateButtonDeviceForm: FC<ICreateButtonDeviceFormProps> = ({
  setActiveModal,
  createButtonDevice,
  idSection,
  index,
  lineNumber,
  styleButton,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<IButtonDevices>({ mode: "onChange" });

  const toggleSubmit: SubmitHandler<IButtonDevices> = (data) => {
    createButtonDevice(data, idSection, lineNumber, index);
    reset();
  };

  useEffect(() => {
    setValue("style", styleButton);
  }, [styleButton, setValue]);

  return (
    <form
      className={style.form}
      onSubmit={stopPropagate(handleSubmit(toggleSubmit))}
    >
      <Field
        placeholder="Title"
        error={errors.title}
        {...register("title", {
          required: "Введите title кнопки",
          maxLength: {
            value: 10,
            message: "Title должен быть меньше 10 символов",
          },
        })}
      />
      <Field
        placeholder="id"
        error={errors.id}
        {...register("id", { required: "Введите id кнопки!" })}
      />
      <Controller
        control={control}
        name="style"
        defaultValue={"default"}
        render={({ field, fieldState: { error } }) => (
          <DynamicSelector
            field={field}
            isLoading={false}
            isMulti={false}
            placeholder={"Стиль кнопки"}
            error={error}
            options={buttonsOptionData}
          />
        )}
      />

      <Button type="button" onClick={() => setActiveModal(false)}>
        Отмена
      </Button>
      <Button type="submit">Создать</Button>
    </form>
  );
};

export default CreateButtonDeviceForm;

import { DynamicSelector } from "@/App/components/screens/Admin/Constructor/Constructor";
import Field from "@/App/components/shared/Field/Field";
import Button from "@/App/components/UI/Button/Button";
import { IButtonDevices } from "@/App/shared/interfaces/device.interface";
import { stopPropagate } from "@/App/utils/stopPropagate.utils";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { buttonsOptionData } from "../../EmptyField/CreateButtonDeviceForm/StyleButtonsSelect.data";
import {
  TypeCreateButtonDevice,
  TypeDeleteButtonDevice,
} from "../../useLineButtons.inderface";
import style from "./UpdateButtonDeviceForm.module.scss";
import { useUpdateButtonDevice } from "./useUpdateButtonDevice";

interface IUpdateButtonDeviceForm {
  createButtonDevice: TypeCreateButtonDevice;
  deleteButtonDevice: TypeDeleteButtonDevice;
  setActiveModal: (prev: boolean) => void;
  idSection: string;
  lineNumber: number;
  index: number;
  button: IButtonDevices;
}

const UpdateButtonDeviceForm: FC<IUpdateButtonDeviceForm> = ({
  createButtonDevice,
  deleteButtonDevice,
  idSection,
  index,
  lineNumber,
  setActiveModal,
  button,
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IButtonDevices>({ mode: "onChange" });

  useUpdateButtonDevice(setValue, button);

  const updateButton: SubmitHandler<IButtonDevices> = (data) => {
    createButtonDevice(data, idSection, lineNumber, index);
    setActiveModal(false);
  };

  const deleteButton = () => {
    deleteButtonDevice(idSection, lineNumber, index);
  };
  return (
    <form
      className={style.form}
      onSubmit={stopPropagate(handleSubmit(updateButton))}
    >
      <Button type="button" onClick={deleteButton}>
        Удалить кнопку
      </Button>
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
        defaultValue="default"
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

export default UpdateButtonDeviceForm;

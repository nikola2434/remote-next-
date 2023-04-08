import Field from "@/App/components/shared/Field/Field";
import {
  IOption,
  ISelect,
} from "@/App/components/shared/Select/Select.interface";
import Button from "@/App/components/UI/Button/Button";
import Heading from "@/App/components/UI/Heading/Heading";
import { FC, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IConstructor } from "./constructor.interface";
import useFormPersist from "react-hook-form-persist";
import { sessionStorageWrapper } from "../../../../utils/storageWrapper.utils";
import dynamic from "next/dynamic";
import ConstructorDevice from "./ConstructorDevice/ConstructorDevice";
import style from "./Constructor.module.scss";
import ButtonsConstructor from "./ButtonsConstructor/ButtonsConstructor";
import { oscilloscope } from "@/App/data/typeDevice/oscilloscopeType.data";

const dataOptions: IOption[] = [
  { label: "Новый", value: "new" },
  { label: "какой-то прибор", value: "1" },
];

export const DynamicSelector = dynamic<ISelect>(
  () => import("../../../shared/Select/Select"),
  { ssr: false }
);

const Constructor: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IConstructor>({ mode: "onChange" });

  useFormPersist("sessionStorage/Constructor", {
    watch,
    setValue,
    storage: sessionStorageWrapper,
  });

  const onSubmit: SubmitHandler<IConstructor> = (data) => {
    console.log(data);
  };

  const typeSections = watch("type");

  useEffect(() => {
    switch (typeSections) {
      case "new":
        setValue("sections", []);
        break;
      case "1":
        setValue("sections", oscilloscope);
      default:
        break;
    }
  }, [typeSections, setValue]);

  return (
    <div className={style.screen}>
      <Heading title="Конструктор прибора" />
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.left}>
          <Field
            placeholder="Название прибора"
            error={errors.name}
            {...register("name", { required: "Введите название прибора!" })}
          />
          <Controller
            control={control}
            name="type"
            render={({ field, fieldState: { error } }) => (
              <DynamicSelector
                field={field}
                isLoading={false}
                isMulti={false}
                placeholder="Выберите кнопки"
                options={dataOptions}
                error={error}
              />
            )}
          />
          <div className={style.right}>
            <ButtonsConstructor />
          </div>
          <Button type="submit">Создать</Button>
        </div>

        <Controller
          control={control}
          name="sections"
          defaultValue={[]}
          render={({ field, fieldState: { error } }) => (
            <ConstructorDevice
              field={field}
              placeholder="Кнопки"
              error={error}
            />
          )}
        />
      </form>
    </div>
  );
};

export default Constructor;

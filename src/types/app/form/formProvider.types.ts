import { AxiosResponse } from "axios";
import { ReactNode } from "react";
import { FieldValues, UseFormProps } from "react-hook-form";
import { AnyObject, ObjectSchema } from "yup";

export interface IFormProviderProps<T extends FieldValues> {
    onSubmit?: (data: T) => Promise<AxiosResponse | void | string>;
    children: ReactNode;
    defaultValues?: UseFormProps<T>["defaultValues"];
    resolver?: ObjectSchema<T, AnyObject, any, "">;
}

import { ContainerHeaderProps } from "./ContainerHeader/types";

export type ContainerProps = {
  id?: string;
  containerHeader?: ContainerHeaderProps;
  children: React.ReactNode;
};

import { ReactNode } from "react";

export interface ICardProps {
  children: ReactNode;
  lock?: boolean;
  glassy?: boolean;
  hiddenContent?: boolean;
}

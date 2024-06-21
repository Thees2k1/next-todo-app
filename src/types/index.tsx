import { ReactNode } from "react";

export interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export interface formProps {
  children: ReactNode;
  className?: string;
  action: (fromData: FormData) => void;
  onSubmit?: () => void;
}



export interface buttonProps {
    type?: "button"|"submit"|"reset";
    text: string|ReactNode;
    bgColor?:string;
    actionButton?: boolean;
    onClick?: ()=>void;
  }

export interface todoProps{
  id:string;
  title?: string|null;
  isCompleted: boolean;
  createdAt?: Date;
}

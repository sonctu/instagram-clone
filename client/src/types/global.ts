export interface IColorIcon {
  color?: '#262626' | '#8e8e8e' | '#0095f6' | '#ed4956';
}

export type IPropsIcon = {
  width?: string;
  height?: string;
  colorFill?: '#262626' | '#8e8e8e' | '#0095f6' | '#ed4956' | 'none';
} & IColorIcon;

export interface IFormGroupEdit {
  label: string;
  value: string;
  id: string;
  name: string;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

export type RadioButtonProps = {
  borderColor?: string;
  color?: string;
  focusColor?: string;
  containerStyle?: object;
  description?: string;
  descriptionStyle?: object;
  disabled?: boolean;
  id: string;
  label?: string;
  labelStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (id: string) => void;
  onFocus?: (id: string) => void;
  onBlur?: (id: string) => void;
  selected?: boolean;
  size?: number;
  value?: string;
  borderSize?: number;
};

export type RadioGroupProps = {
  containerStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (radioButtons: RadioButtonProps[]) => void;
  radioButtons: RadioButtonProps[];
};

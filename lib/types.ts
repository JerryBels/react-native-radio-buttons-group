export type RadioButtonProps = {
  borderColor?: string;
  color?: string;
  containerStyle?: object;
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  labelStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
  value?: string;
};

export type RadioGroupProps = {
  containerStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (radioButtons: RadioButtonProps[]) => void;
  radioButtons: RadioButtonProps[];
};

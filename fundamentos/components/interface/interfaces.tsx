import { TextInputProps } from "react-native";

export interface contadorProps {
  titulo: string;
  inicial: number;
}

export interface formProps {
  label: string;
  placeholder: string;
  value: string;
  erro?: string;
  onChangeText: (valor: string) => void;
}

export interface campoTextoProps extends TextInputProps {
  label?: string;
  erro?: string;
}

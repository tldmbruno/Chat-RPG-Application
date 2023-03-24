import { Label } from '../typography';
import {
  SelectStyled,
  TextArea,
  TextAreaProps,
  TextField,
  TextInputWrapper,
} from './inputs-components.styled';

export interface TextInputProps {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  label?: string;
  lightLabel?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: true;
}

interface TextAreaInputProps extends TextAreaProps {
  label: string;
  lightLabel?: boolean;
}

interface SelectInputProps {
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TextInput = ({
  type,
  label,
  placeholder,
  lightLabel,
  maxLength,
  onChange,
  onBlur,
  onKeyDown,
  required,
}: TextInputProps) => {
  return (
    <TextInputWrapper>
      <Label light={lightLabel}>{label}</Label>
      <TextField
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        name={label?.toLowerCase()}
        required={required}
      />
    </TextInputWrapper>
  );
};

export const TextAreaInput = ({
  label,
  height,
  width,
  lightLabel,
}: TextAreaInputProps) => {
  return (
    <TextInputWrapper>
      <Label light={lightLabel}>{label}</Label>
      <TextArea height={height} width={width} />
    </TextInputWrapper>
  );
};

export const SelectInput = ({ options, onChange }: SelectInputProps) => {
  return (
    <SelectStyled onChange={onChange}>
      <option disabled selected value={'null'}>
        Selecionar
      </option>
      {options.map((element, index) => {
        return (
          <option key={index} value={element}>
            {element}
          </option>
        );
      })}
    </SelectStyled>
  );
};

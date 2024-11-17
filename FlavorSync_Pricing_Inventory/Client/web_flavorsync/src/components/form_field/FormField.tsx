import "./FormField.scss";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  label: string;
}

const FormField: React.FC<FormInputProps> = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  label,
}) => {
  return (
    <div className="form-data">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        // autoComplete="off"
      />
    </div>
  );
};

export default FormField;

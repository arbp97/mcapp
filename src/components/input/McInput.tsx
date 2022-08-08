import "./McInput.css";

type McInputProps = {
  width: string;
  id: string;
  label?: string;
  type: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const McInput = ({
  width,
  id,
  label,
  type,
  disabled,
  value,
  placeholder,
  onChange,
}: McInputProps) => {
  return (
    <div className="McInput" style={{ width: width }}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        disabled={disabled ?? false}
        placeholder={placeholder ?? ""}
        defaultValue={value ?? ""}
        onChange={onChange}
      />
    </div>
  );
};

export default McInput;

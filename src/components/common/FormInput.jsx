const FormInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete,
  optional = false,
}) => (
  <div>
    <label className="block text-textPrimary mb-2">
      {label}{" "}
      {optional && <span className="text-sm text-gray-400">(Optional)</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="w-full bg-backgroundHover border border-borderColor rounded-md px-4 py-3 text-sm sm:text-base text-textPrimary focus:outline-none focus:ring-2 focus:ring-highlightText/50"
    />
  </div>
);


export default FormInput
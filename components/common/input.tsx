export default function Input({
  type,
  defaultValue,
  className,
  placeholder,
  label,
  parentClass,
  disabled,
  name,
  onChange,
  req,
  errMsg,
}: {
  type?: "text" | "number";
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  onChange?: any;
  disabled?: boolean;
  parentClass?: string;
  req?: boolean;
  errMsg?: any;
}) {
  return (
    <div className={`${parentClass} relative`}>
      {label ? (
        <label htmlFor={name} className="text-base text-black ">
          {label}

          {req ? <span className="text-rose-700 ms-1">*</span> : <></>}
        </label>
      ) : (
        <></>
      )}
      <div className="mt-2 mb-6">
        <input
          name={name}
          type={type}
          required={req}
          onChange={onChange}
          disabled={disabled}
          defaultValue={defaultValue}
          autoComplete="given-name"
          placeholder={placeholder || "Type here"}
          className={`px-4 py-[10px] rounded border outline-none  w-full placeholder:text-2 placeholder:text-base text-2 text-base ${className} ${
            errMsg ? "border-rose-200" : "border-blue-200"
          }`}
        />
        {errMsg && <p className="text-rose-600 mt-1">{errMsg}</p>}
      </div>
    </div>
  );
}

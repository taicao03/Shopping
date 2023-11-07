export default function Input({
  type,
  defaultValue,
  className,
  placeholder,
  label,
  parentClass,
  disabled,
  name,
}: {
  type?: "submit" | "reset" | "button";
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  disabled?: boolean;
  parentClass?: string;
}) {
  return (
    <div className={parentClass}>
      {label ? (
        <label htmlFor={name} className="text-base text-black">
          {label}
        </label>
      ) : (
        <></>
      )}
      <div className="mt-2">
        <input
          name={name}
          type={type}
          disabled={disabled}
          defaultValue={defaultValue}
          autoComplete="given-name"
          placeholder={placeholder}
          className={`px-4 py-[13px] rounded bg-secondary_2 outline-none w-full placeholder:text-2 placeholder:text-base text-2 text-base mb-6 ${className}`}
        />
      </div>
    </div>
  );
}

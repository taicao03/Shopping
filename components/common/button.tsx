export default function Button({
  type,
  text,
  className,
  disabled,
  onClick,
}: {
  type?: "submit" | "reset" | "button";
  text?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <>
      <button
        className={`${className} bg-button_2 rounded-[4px] py-4 px-12`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <p className="text-white text-base font-medium">{text}</p>
      </button>
    </>
  );
}

import Link from "next/link";

export default function Button({
  type,
  text,
  parentClass,
  className,
  disabled,
  onClick,
  href,
  py,
}: {
  type?: "submit" | "reset" | "button";
  text?: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  parentClass?: string;
  py?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <>
      <div className={parentClass}>
        <button
          className={`bg-button_2 rounded-[4px] px-12 ${
            py || "py-4"
          } ${className}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {href ? (
            <Link href={href} className="text-white text-base font-medium">
              {text}
            </Link>
          ) : (
            <p className="text-white text-base font-medium">{text}</p>
          )}
        </button>
      </div>
    </>
  );
}

import Link from "next/link";

export default function Button({
  type,
  text,
  className,
  disabled,
  onClick,
  href,
}: {
  type?: "submit" | "reset" | "button";
  text?: string;
  className?: string;
  disabled?: boolean;
  href?: string;
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
        {href ? (
          <Link className="text-white text-base font-medium" href={href}>
            {text}
          </Link>
        ) : (
          <p className="text-white text-base font-medium">{text}</p>
        )}
      </button>
    </>
  );
}

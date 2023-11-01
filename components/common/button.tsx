export default function Button({
  type,
  text,
  className,
}: {
  type?: "submit" | "reset" | "button";
  text?: string;
  className?: string;
}) {
  return (
    <>
      <button
        className={`${className} bg-button_2 rounded-[4px] py-4 px-12`}
        type={type}
      >
        <p className="text-white text-base font-medium">{text}</p>
      </button>
    </>
  );
}

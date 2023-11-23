export default function Loading() {
  return (
    <div
      id="globalLoader"
      className="bg-black h-[calc(100dvh)] w-full overflow-y-hidden z-50 fixed top-0 scroll-custom"
    >
      <div className="absolute top-[50%] translate-y-[-50%] flex justify-center w-full"></div>
    </div>
  );
}

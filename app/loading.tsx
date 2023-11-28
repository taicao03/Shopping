export default function Loading() {
  return (
    <div
      id="globalLoader"
      className="bg-gradient-to-r from-slate-900 to-slate-700 h-[calc(100dvh)] w-full overflow-y-hidden z-50 fixed top-0 scroll-custom"
    >
      <div className="absolute top-[50%] translate-y-[-50%] flex justify-center w-full">
        <h1 className="animate-pulse animate-once animate-ease-linear text-black text-[120px] ">
          Chin Chàoooo
        </h1>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div
      id="globalLoader"
      className="bg-gradient-to-r from-slate-900 to-slate-700 h-[calc(100dvh)] w-full overflow-y-hidden z-50 fixed top-0 scroll-custom"
    >
      <div className="absolute top-[50%] translate-y-[-50%] flex justify-center w-full">
        <h1 className="animate-pulse animate-once animate-ease-linear text-black text-[120px] ">
          <img
            src="https://triptoursmadrid.com/wp-content/uploads/2023/06/travellers-choice-2023-1.gif"
            alt=""
          />
        </h1>
      </div>
    </div>
  );
}

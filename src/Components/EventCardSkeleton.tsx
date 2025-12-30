function EventCardSkeleton() {
  return (
    <>
      <div className="flex w-full m-5  md:w-[320px] lg:w-[300px] xl:w-[320px] 2xl:w-[380px] flex-col gap-4">
        <div className="skeleton bg-slate-800 h-62 w-full"></div>
        <div className="skeleton bg-slate-800 h-4 w-28"></div>
        <div className="skeleton bg-slate-800  h-4 w-full"></div>
        <div className="skeleton bg-slate-800 h-4 w-full"></div>
        <div className="skeleton bg-slate-800 h-4 w-full"></div>
      </div>
    </>
  );
}

export default EventCardSkeleton;

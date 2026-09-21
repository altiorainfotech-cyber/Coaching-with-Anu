export default function AnnouncementBar() {
  return (
    <div className="bg-wb-primary px-4 py-2.5 text-center text-[11px] font-medium tracking-[0.2em] text-white uppercase [animation:wb-fade_0.8s_ease-out_both] sm:text-xs">
      <span
        aria-hidden
        className="relative mr-3 inline-block size-2 rounded-full bg-wb-accent align-middle"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-wb-accent" />
      </span>
      Free Live Webinar • Limited Seats Available
    </div>
  );
}

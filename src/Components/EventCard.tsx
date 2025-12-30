import { Calendar, MapPin } from "lucide-react";
import type { EventGrid } from "../hooks/useEvents";
import EventDescription from "./EventDescription";

interface Props {
  event: EventGrid;
}
function EventCard({ event }: Props) {
  return (
    <>
      <div className="group m-5  bg-[#151e32] border border-slate-700 rounded-xl overflow-hidden text-white w-full  md:w-[320px] lg:w-[300px] xl:w-[320px] 2xl:w-[370px] hover:border-cyan-400 hover:shadow-cyan-400/50 hover:shadow-lg transition-all hover:scale-103 hover:-translate-y-1">
        <div className="relative">
          <img className="contrast-80 w-full h-full" src={event.image} alt="" />
          <p className="absolute top-4 right-2 bg-cyan-300 rounded-xl p-1 w-25 text-cyan-950 font-bold text-sm text-center">
            {event.event_type}
          </p>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-xl text-white mb-3 group-hover:text-cyan-400 ">
            {event.title}
          </h3>
          <div className="flex space-x-25 mb-3 text-slate-400">
            <div className="flex">
              <Calendar className="w-4 h-4 mt-1 mx-1 text-cyan-400" />
              <p> {event.event_date}</p>
            </div>
            <div className="flex">
              <MapPin className="w-4 h-4 mt-1 mx-1 text-cyan-400" />
              <p>{event.event_location}</p>
            </div>
          </div>

          <EventDescription description={event.description} maxLength={130} />
        </div>
      </div>
    </>
  );
}

export default EventCard;

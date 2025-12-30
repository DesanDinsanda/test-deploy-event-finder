import { MapPin } from "lucide-react";
import { useState } from "react";

interface Props {
  clickEvent: (location: string) => void;
  location: string;
}
const eventLocations = [
  { id: "", location: "Any" },
  { id: "Colombo", location: "Colombo" },
  { id: "Dehiwala Mount Lavinia", location: "Dehiwala Mount Lavinia" },
  { id: "Moratuwa", location: "Moratuwa" },
  { id: "Sri Jayawardenepura Kotte", location: "Sri Jayawardenepura Kotte" },
  { id: "Negombo", location: "Negombo" },
  { id: "Kandy", location: "Kandy" },
  { id: "Kalmunai", location: "Kalmunai" },
  { id: "Vavuniya", location: "Vavuniya" },
  { id: "Galle", location: "Galle" },
  { id: "Trincomalee", location: "Trincomalee" },
  { id: "Batticaloa", location: "Batticaloa" },
  { id: "Jaffna", location: "Jaffna" },
  { id: "Matale", location: "Matale" },
  { id: "Katunayake", location: "Katunayake" },
  { id: "Dambulla", location: "Dambulla" },
  { id: "Kolonnawa", location: "Kolonnawa" },
  { id: "Ratnapura", location: "Anuradhapura" },
  { id: "other", location: "other" },
  { id: "Galle", location: "Galle" },
];

function LocationSelector({ location, clickEvent }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative w-62 z-20 mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-lg mt-3 bg-slate-800 px-4 py-2 text-left text-white hover:border hover:border-cyan-200"
      >
        {location ? (
          location
        ) : (
          <div className="flex  ">
            <MapPin size={15} className="mt-1 mr-2 text-cyan-500 " />
            Location
          </div>
        )}
      </button>

      {open && (
        <div className="absolute mt-1 w-full rounded-lg bg-slate-900 shadow">
          {eventLocations.map((event_location) => (
            <button
              key={event_location.id}
              onClick={() => {
                clickEvent(event_location.id);
                setOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-white hover:bg-cyan-400 hover:text-cyan-950"
            >
              {event_location.location}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationSelector;

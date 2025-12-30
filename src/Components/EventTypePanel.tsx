import {
  Hash,
  Code,
  Users,
  Mic,
  Presentation,
  Globe,
  Layers,
  Dot,
  Wrench,
  FileStack,
} from "lucide-react";
interface Props {
  onSelectType: (type: string) => void;
  selectedType: string;
}
function EventTypePanel({ onSelectType, selectedType }: Props) {
  const uniqueEventTypes = [
    {
      id: "all",
      label: "",
      name: "All Events",
      icon: Layers,
    },
    {
      id: "hackathon",
      label: "Hackathon",
      name: "Hackathon",
      icon: Code,
    },
    {
      id: "bootcamp",
      label: "Bootcamp",
      name: "Bootcamp",
      icon: Hash,
    },
    {
      id: "workshop",
      label: "Workshop",
      name: "Workshop",
      icon: Wrench,
    },
    {
      id: "meetup",
      label: "Meetup",
      name: "Meetup",
      icon: Users,
    },
    {
      id: "seminar",
      label: "Seminar",
      name: "Seminar",
      icon: Mic,
    },
    {
      id: "Conference",
      label: "Conference",
      name: "Conference",
      icon: Presentation,
    },
    {
      id: "expo",
      label: "Expo",
      name: "Expo",
      icon: Globe,
    },
    {
      id: "other",
      label: "Other",
      name: "Other",
      icon: FileStack,
    },
  ];
  return (
    <>
      {
        <div>
          <h3 className="text-white ml-5 text-4xl font-bold">Event Type</h3>
          {uniqueEventTypes.map((uniqueEventType) => (
            <button
              className="group m-3 p-2 w-full rounded-xl text-xl text-left text-slate-400 hover:bg-slate-800 hover:text-white"
              onClick={() => {
                onSelectType(uniqueEventType.label);
              }}
              key={uniqueEventType.id}
            >
              <div
                className={`flex ${
                  selectedType === uniqueEventType.label
                    ? "border border-cyan-300 p-3 text-cyan-500 rounded-xl shadow-cyan-300 shadow-sm"
                    : ""
                }`}
              >
                {
                  <uniqueEventType.icon className="mr-3 group-hover:text-cyan-400 " />
                }
                {uniqueEventType.name}
                {selectedType === uniqueEventType.label && (
                  <Dot className="mt-1 font-bold ml-7  " />
                )}
              </div>
            </button>
          ))}
        </div>
      }
    </>
  );
}

export default EventTypePanel;

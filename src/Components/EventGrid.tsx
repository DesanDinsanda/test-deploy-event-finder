import useEvents from "../hooks/useEvents";
import EventCardSkeleton from "./EventCardSkeleton";
import EventCard from "./EventCard";

interface Props {
  selectedType?: string;
  selectedLocation?: string;
  searchTerm?: string;
}
function EventGrid({ selectedType, selectedLocation, searchTerm }: Props) {
  const { events, error, isLoading } = useEvents(
    selectedType,
    selectedLocation,
    searchTerm
  );
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="flex flex-wrap justify-center z-10">
        {isLoading &&
          skeletons.map((skeleton) => <EventCardSkeleton key={skeleton} />)}
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {error && <p>Failed to load event data</p>}
    </>
  );
}

export default EventGrid;

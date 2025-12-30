import axios from "axios";
import { useEffect, useState } from "react";
export interface EventGrid {
  id: number;
  title: String;
  image: string;
  event_type: string;
  event_location: string;
  event_date: string;
  description: string;
}

function useEvents(
  selectedype?: string,
  selectedLocation?: string,
  searchTerm?: string
) {
  const [events, setEvent] = useState<EventGrid[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let url =
      "https://tender-generosity-production-b012.up.railway.app/event-finder/events";
    const params: string[] = [];
    if (selectedype) {
      params.push(`type=${selectedype}`);
    }
    if (selectedLocation) {
      params.push(`location=${selectedLocation}`);
    }
    if (searchTerm) {
      params.push(`keyword=${searchTerm}`);
    }

    if (params.length > 0) {
      url += `?${params.join("&")}`;
    }

    axios
      .get<EventGrid[]>(url)
      .then((response) => {
        setEvent(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [selectedype, selectedLocation, searchTerm]);
  return { events, error, isLoading };
}

export default useEvents;

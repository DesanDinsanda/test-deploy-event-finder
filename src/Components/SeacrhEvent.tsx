import { useState } from "react";

interface Props {
  onSearch: (term: string) => void;
}

function SearchEvent({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(searchTerm);
        }}
      >
        <div className="flex">
          <input
            className=" bg-slate-800 ml-4 px-4 py-2  w-full p-1 hover:border rounded-lg hover:border-cyan-800 hover:shadow-cyan-400/50 text-slate-300"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search events"
          />
        </div>
      </form>
    </>
  );
}

export default SearchEvent;

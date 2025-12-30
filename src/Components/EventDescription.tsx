import { useState } from "react";

interface Props {
  description: string;
  maxLength: number;
}

function EventDescription({ description, maxLength }: Props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <p className="text-slate-300 mb-3">
        {description.length > maxLength && !readMore
          ? description.substring(0, maxLength) + "..."
          : description}
      </p>
      {description.length > maxLength && (
        <button
          className="flex justify-center bg-linear-to-r font-bold from-cyan-600 to-cyan-500 w-full py-3 rounded-xl hover:bg-linear-to-r hover:from-cyan-400 hover:to-cyan-300 hover:scale-103"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
      )}
    </>
  );
}

export default EventDescription;

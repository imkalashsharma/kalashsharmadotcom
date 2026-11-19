// import types
import type { WritingsType } from "@/data/writings";
import { Image } from "antd";
import { Pill } from "../Pill";

export const WritingCard = ({ data }: { data: WritingsType }) => {
  return (
    <a href={data.url} className="writingCard p-2 mb-3">
      <div className="writingCard__image">
        <Image
          className="rounded-md"
          preview={false}
          src={data.imgUrl}
          alt={`${data.header} image`}
        />
      </div>

      <div className="writingCard__header text-md font-semibold mb-2 text-center">
        {data.header}
      </div>

      <div className="writingCard__description text-center text-md mb-4">
        {data.description}
      </div>

      <div className="writingCard__pills flex flex-wrap gap-3 items-center justify-center">
        {data.tags.map((t) => (
          <Pill label={t} />
        ))}
      </div>
    </a>
  );
};
